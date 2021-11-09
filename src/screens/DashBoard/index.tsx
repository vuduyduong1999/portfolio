import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Categories, Decor, HeaderDashBoard } from './components';
import { FocusAwareStatusBar } from '@common';

import { colors } from '@styles';

interface Props {}
export const DashBoardScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <HeaderDashBoard />
      <Categories />
      <Decor />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
});
