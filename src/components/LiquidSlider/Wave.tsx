import React from 'react';

import { StyleSheet } from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from 'react-native-reanimated';
import { Vector } from 'react-native-redash';
import Svg, { Path, PathProps } from 'react-native-svg';

import { HEIGHT } from '@styles';
import { curve } from '@utils';

import { c, MIN_LEDGE } from './constant';
import { ESide } from './type';

interface Props {
  side: ESide;
  position: Vector<Animated.SharedValue<number>>;
  children: React.ReactNode;
  isTransitioning: Animated.SharedValue<boolean>;
}

const ASvg = Animated.createAnimatedComponent(Svg);
const APath = Animated.createAnimatedComponent(Path);
export const Wave = ({ children, side, position: { x, y } }: Props) => {
  const R = useDerivedValue(() => {
    return x.value + MIN_LEDGE;
  });
  const animatedProps = useAnimatedProps((): PathProps => {
    const p1: Vector = {
      x: x.value,
      y: y.value - 2 * R.value,
    };
    const c1: Vector = {
      x: p1.x,
      y: p1.y + R.value * c,
    };
    const p2: Vector = {
      x: x.value + R.value / 2,
      y: y.value - R.value,
    };

    const p3: Vector = {
      x: x.value + R.value,
      y: y.value,
    };
    const c31: Vector = {
      x: p3.x,
      y: p3.y - R.value * c,
    };
    const c32: Vector = {
      x: p3.x,
      y: p3.y + R.value * c,
    };
    const p4: Vector = {
      x: x.value + R.value / 2,
      y: y.value + R.value,
    };

    const p5: Vector = {
      x: x.value,
      y: y.value + 2 * R.value,
    };
    const c5: Vector = {
      x: p5.x,
      y: p5.y - R.value * c,
    };
    const d: string[] = [
      'M 0 0',
      `H ${x.value}`,
      `V ${p1.y}`,
      curve(c1, p2, p2),
      curve(p2, c31, p3),
      curve(c32, p4, p4),
      curve(p4, p4, p4),
      curve(p4, c5, p5),
      `V ${HEIGHT}`,
      'H 0',
      'Z',
    ];
    return { d: d.join('') };
  });
  const maskElement = (
    <ASvg
      style={[
        StyleSheet.absoluteFill,
        {
          transform: [
            {
              rotateY: side === ESide.RIGHT ? `${Math.PI}rad` : '0rad',
            },
          ],
        },
      ]}
    >
      <APath animatedProps={animatedProps} fill={'black'} />
    </ASvg>
  );

  return (
    <MaskedView style={StyleSheet.absoluteFillObject} maskElement={maskElement}>
      {children}
    </MaskedView>
  );
};
