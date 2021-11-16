import React from 'react';

import { StyleSheet, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { FocusAwareStatusBar } from '@common';

import { colors } from '@styles';

interface Props {}
export const ChartScreen = ({}: Props) => {
  return (
    <LinearGradient
      colors={[colors.SECONDARY, colors.WHITE]}
      style={styles.container}
    >
      <FocusAwareStatusBar barStyle="light-content" />
      <Text>ChartScreen</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
