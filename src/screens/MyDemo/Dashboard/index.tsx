import React from 'react';

import { StyleSheet } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';
import LinearGradient from 'react-native-linear-gradient';

import { Categories, Decor } from './components';
import { FocusAwareStatusBar } from '@common';

import { colors, responsive } from '@styles';

interface Props {}
export const DemoDashboardScreen = ({}: Props) => {
  const headerHeight = useHeaderHeight();

  const paddingTop = headerHeight + responsive(20);
  return (
    <LinearGradient
      colors={[colors.SECONDARY, colors.WHITE]}
      style={[styles.container, { paddingTop }]}
    >
      <FocusAwareStatusBar barStyle="light-content" />
      <Categories />
      <Decor />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
