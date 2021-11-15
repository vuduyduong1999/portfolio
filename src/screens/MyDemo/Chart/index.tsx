import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface Props {}
export const ChartScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>ChartScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
