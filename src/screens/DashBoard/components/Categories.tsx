import React from 'react';

import { StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { CategoryCard } from '@components';

import { arrCategoryDashboard } from '@constants';
import { responsive } from '@styles';
import { ICategory, RootNavigationProp } from '@types';

interface Props {}
export const Categories = ({}: Props) => {
  const { navigate } = useNavigation<RootNavigationProp>();
  const renderItem = (category: ICategory, key: number) => {
    const onPress = () => category.screen && navigate(category.screen);
    return (
      <CategoryCard
        key={key}
        category={category}
        onPress={onPress}
        style={styles.card}
      />
    );
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
