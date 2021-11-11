import React from 'react';

import { StyleSheet, View } from 'react-native';

import {
  interpolateColor,
  interpolateColors,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import { slides } from '@constants';
import { colors, WIDTH } from '@styles';

import { Button } from './Button';
import { ListContent } from './ListContent';
import { ListImage } from './ListImage';

interface Props {}

export const FashionSlider = ({}: Props) => {
  const scrollX = useSharedValue(0);
  const inputRange = slides.map((_, index) => index * WIDTH);
  const outputColorRange = slides.map((item) => item.color);
  const color = useDerivedValue(() =>
    interpolateColor(scrollX.value, inputRange, outputColorRange),
  );
  return (
    <View style={styles.container}>
      <ListImage scrollX={scrollX} color={color} />
      <ListContent scrollX={scrollX} color={color} />
      <Button scrollX={scrollX} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
});
