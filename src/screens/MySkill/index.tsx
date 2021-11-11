import React from 'react';

import { StyleSheet, View } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { Card, Decor } from './components';
import { FocusAwareStatusBar } from '@common';

import { mySkill } from '@constants';
import { colors, HEIGHT, responsive } from '@styles';
import { ISkill } from '@types';

interface Props {}
export const MySkillScreen = ({}: Props) => {
  const scrollY = useSharedValue(0);
  const heightHeader = useHeaderHeight();

  const start = { x: 0, y: 0 };
  const end = { x: 0, y: 0.7 };

  const paddingTop = heightHeader + responsive(20);

  const renderSkillCard = (skill: ISkill, key: number) => {
    return <Card key={key} skill={skill} index={key} scrollY={scrollY} />;
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      scrollY.value = y;
    },
  });
  return (
    <LinearGradient
      colors={colors.LINEAR}
      start={start}
      end={end}
      style={[styles.container, { paddingTop }]}
    >
      <FocusAwareStatusBar barStyle="light-content" />
      <Decor />
      <Animated.ScrollView
        style={StyleSheet.absoluteFillObject}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      <View pointerEvents="none">{mySkill.map(renderSkillCard)}</View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: responsive(20) },
  contentContainer: { height: HEIGHT * mySkill.length },
});
