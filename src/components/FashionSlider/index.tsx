import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@styles';

interface Props {}
export const FashionSlider = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>FashionSlider</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
});
