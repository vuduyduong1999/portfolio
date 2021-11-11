import React from 'react';

import { StyleSheet, View } from 'react-native';

import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { slides } from '@constants';
import { colors, responsive } from '@styles';
import { ISlide } from '@types';

import { Indicator } from './Indicator';
import { SlideContent } from './SlideContent';

interface Props {
  scrollX: Animated.SharedValue<number>;
  color: Animated.SharedValue<number | string>;
}

const borderTopLeftRadius = responsive(70);

export const ListContent = ({ color, scrollX }: Props) => {
  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: color.value,
    position: 'absolute',
    width: borderTopLeftRadius,
    height: borderTopLeftRadius,
  }));

  const renderItem = (slide: ISlide, key: number) => (
    <SlideContent key={key} scrollX={scrollX} index={key} slide={slide} />
  );

  return (
    <View style={styles.container}>
      <Animated.View style={backgroundStyle} />
      <View style={styles.wrapperContent}>
        <Indicator scrollX={scrollX} />
        <View style={styles.content}>{slides.map(renderItem)}</View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 0.4 },
  wrapperContent: {
    flex: 1,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius,
  },
  content: { flex: 1 },
});
