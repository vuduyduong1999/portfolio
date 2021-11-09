import React from 'react';

import { StyleSheet, View } from 'react-native';

import { CategoryCard } from '@components';

import { arrCategoryDashboard } from '@constants';
import { responsive } from '@styles';
import { ICategory } from '@types';

interface Props {}
export const Categories = ({}: Props) => {
  const renderItem = (category: ICategory, key: number) => {
    return <CategoryCard key={key} category={category} style={styles.card} />;
  };
  return (
    <View style={styles.container}>{arrCategoryDashboard.map(renderItem)}</View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsive(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: { marginBottom: responsive(20) },
});
