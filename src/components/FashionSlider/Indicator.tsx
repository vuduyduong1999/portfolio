import React from 'react';

import { StyleSheet, View } from 'react-native';

import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { slides } from '@constants';
import { colors, responsive, WIDTH } from '@styles';
import { ISlide } from '@types';

interface Props {
  scrollX: Animated.SharedValue<number>;
}
const height = responsive(5);
export const Indicator = ({ scrollX }: Props) => {
  const renderItem = (_: ISlide, key: number) => {
    return <Dash key={key} index={key} scrollX={scrollX} />;
  };
  return <View style={styles.container}>{slides.map(renderItem)}</View>;
};
const styles = StyleSheet.create({
  container: {
    height: responsive(70),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapperDash: {
    width: responsive(20),
    height: responsive(5),
    alignItems: 'center',
  },
});
const Dash = ({ scrollX, index }: Props & { index: number }) => {
  const inputRange = [
    (index - 2) * WIDTH,
    (index - 1) * WIDTH,
    index * WIDTH,
    (index + 1) * WIDTH,
    (index + 2) * WIDTH,
  ];
  const outputWidthRange = [
    responsive(5),
    responsive(5),
    responsive(20),
    responsive(5),
    responsive(5),
  ];
  const outputColorRange = [
    colors.GREY,
    colors.GREY,
    slides[index].color,
    colors.GREY,
    colors.GREY,
  ];
  const width = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, outputWidthRange),
  );
  const backgroundColor = useDerivedValue(() =>
    interpolateColor(scrollX.value, inputRange, outputColorRange),
  );
  const animatedStyle = useAnimatedStyle(() => ({
    height,
    width: width.value,
    borderRadius: height,
    backgroundColor: backgroundColor.value,
  }));
  return (
    <View style={styles.wrapperDash}>
      <Animated.View style={animatedStyle} />
    </View>
  );
};
