import React from 'react';

import { StyleSheet, View } from 'react-native';

import { ProjectCard } from '@components';

import { WIDTH } from '@styles';
import { IProject } from '@types';

interface Props {
  project: IProject;
}
export const Card = ({ project }: Props) => {
  return (
    <View style={styles.container}>
      <ProjectCard project={project} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { width: WIDTH, justifyContent: 'center', alignItems: 'center' },
});
