import React from 'react';

import { FlatList, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Card } from './components';
import { FocusAwareStatusBar } from '@common';

import { myProjects } from '@constants';
import { colors } from '@styles';
import { IProject } from '@types';

interface Props {}

const keyExtractor = (_: IProject, index: number) => `${index}`;
export const MyProjectScreen = ({}: Props) => {
  const renderItem = ({ item }: { item: IProject }) => {
    return <Card project={item} />;
  };
  return (
    <LinearGradient colors={colors.LINEAR} style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <FlatList
        data={myProjects}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
