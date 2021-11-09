import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { LiquidSlider } from '@components';

interface Props {}
export const IntroduceIOSScreen = ({}: Props) => {
  return <LiquidSlider />;
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
