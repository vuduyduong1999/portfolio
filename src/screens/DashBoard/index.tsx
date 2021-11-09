import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface Props {}
export const DashBoardScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>DashBoardScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
