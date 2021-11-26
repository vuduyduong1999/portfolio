import React from 'react';

import { FlatList } from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { FocusAwareStatusBar } from '@common';

import { slides } from '@constants';
import { responsive } from '@styles';
import { ISlide } from '@types';

import { SlideImage } from './SlideImage';

interface Props {
  scrollX: Animated.SharedValue<number>;
  color: Animated.SharedValue<number | string>;
}

const AFlatList = Animated.createAnimatedComponent(FlatList);
const borderBottomRightRadius = responsive(70);
const keyExtractor = (_: unknown, index: number) => `${index}`;
export const ListImage = ({ scrollX, color }: Props) => {
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      scrollX.value = x;
    },
  });
  const container = useAnimatedStyle(() => ({
    flex: 0.6,
    borderBottomRightRadius,
    backgroundColor: color.value,
  }));

  const renderItem = ({ item }: { item: unknown }) => (
    <SlideImage slide={item as ISlide} />
  );

  return (
    <Animated.View style={container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <AFlatList
        pagingEnabled
        scrollEventThrottle={1}
        horizontal
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={slides}
      />
    </Animated.View>
  );
};
