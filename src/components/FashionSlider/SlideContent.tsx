import React from 'react';

import { Text, StyleSheet } from 'react-native';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { responsive, typos, WIDTH } from '@styles';
import { ISlide } from '@types';

interface Props {
  slide: ISlide;
  index: number;
  scrollX: Animated.SharedValue<number>;
}
export const SlideContent = ({ slide, index, scrollX }: Props) => {
  const inputRange = [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH];
  const opacity = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [0, 1, 0]),
  );
  const animatedStyle = useAnimatedStyle(() => ({
    width: WIDTH,
    position: 'absolute',
    alignItems: 'center',
    opacity: opacity.value,
  }));
  return (
    <Animated.View style={animatedStyle}>
      <Text style={styles.txt}>{slide.description}</Text>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  txt: {
    ...typos.lg.semiBold,
    width: responsive(335),
    textAlign: 'center',
    lineHeight: responsive(30),
  },
});
