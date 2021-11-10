import React from 'react';

import { FlatList, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { Card } from './components';
import { FocusAwareStatusBar } from '@common';

import { myProjects } from '@constants';
import { colors } from '@styles';
import { IProject } from '@types';

interface Props {}

const AFlatList = Animated.createAnimatedComponent(FlatList);
const keyExtractor = (item: unknown, index: number) => `${index}`;
export const MyProjectScreen = ({}: Props) => {
  const scrollX = useSharedValue(0);
  const renderItem = ({ item, index }: { item: unknown; index: number }) => {
    return <Card project={item as IProject} index={index} scrollX={scrollX} />;
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      scrollX.value = x;
    },
  });

  return (
    <LinearGradient colors={colors.LINEAR} style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <AFlatList
        data={myProjects}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={scrollHandler}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
