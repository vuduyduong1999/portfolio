import React from 'react';

import { useHeaderHeight } from '@react-navigation/elements';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { SkillCard } from '@components';

import { mySkill } from '@constants';
import { HEIGHT, responsive } from '@styles';
import { ISkill } from '@types';

interface Props {
  skill: ISkill;
  index: number;
  scrollY: Animated.SharedValue<number>;
}

export const Card = ({ index, skill, scrollY }: Props) => {
  const heightHeader = useHeaderHeight();
  const contentHeight = HEIGHT - heightHeader - responsive(310);
  const top = contentHeight / mySkill.length;

  const inputRange = [
    (index - 2) * HEIGHT,
    (index - 1) * HEIGHT,
    index * HEIGHT,
    (index + 1) * HEIGHT,
    (index + 2) * HEIGHT,
  ];
  const outputTranYRange = [responsive(235), responsive(235), 0, 0, 0];

  const tranY = useDerivedValue(() =>
    interpolate(scrollY.value, inputRange, outputTranYRange),
  );

  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    top: index * top,
    transform: [{ translateY: tranY.value }],
  }));
  return (
    <Animated.View style={animatedStyle}>
      <SkillCard skill={skill} />
    </Animated.View>
  );
};
