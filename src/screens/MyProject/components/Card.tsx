import React from 'react';

import { StyleSheet, View } from 'react-native';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { ProjectCard } from '@components';

import { WIDTH } from '@styles';
import { IProject } from '@types';

interface Props {
  project: IProject;
  scrollX: Animated.SharedValue<number>;
  index: number;
}
export const Card = ({ project, scrollX, index }: Props) => {
  const inputRange = [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH];

  const opacity = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [0, 1, 0]),
  );
  const scale = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [0.7, 1, 0.7]),
  );
  const rotateY = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [-30, 0, 30]),
  );

  const animationStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }, { rotateY: `${rotateY.value}deg` }],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={animationStyle}>
        <ProjectCard project={project} />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { width: WIDTH, justifyContent: 'center', alignItems: 'center' },
});
