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
import { ESide } from '@types';

import { C, MIN_LEDGE } from './constant';
import { curve } from './utils';

interface Props {
  side: ESide;
  position: Vector<Animated.SharedValue<number>>;
  children: React.ReactNode;
  isTransitioning: Animated.SharedValue<boolean>;
}

const APath = Animated.createAnimatedComponent(Path);
export const Wave = ({ children, side, position: { x, y } }: Props) => {
  const R = useDerivedValue(() => {
    return x.value + MIN_LEDGE;
  });
  const CurveCubize = useDerivedValue(() => R.value * C);
  const animatedProps = useAnimatedProps((): PathProps => {
    const p1: Vector = {
      x: x.value,
      y: y.value - 2 * R.value,
    };
    const c1: Vector = {
      x: p1.x,
      y: p1.y + CurveCubize.value,
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
      y: p3.y - CurveCubize.value,
    };
    const c32: Vector = {
      x: p3.x,
      y: p3.y + CurveCubize.value,
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
      y: p5.y - CurveCubize.value,
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
    <Svg
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
    </Svg>
  );

  return (
    <MaskedView style={StyleSheet.absoluteFillObject} maskElement={maskElement}>
      {children}
    </MaskedView>
  );
};
