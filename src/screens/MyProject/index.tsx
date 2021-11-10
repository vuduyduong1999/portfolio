import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface Props {}
export const MyProjectScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>MyProjectScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
