import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface Props {}
export const IntroduceAndroidScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>IntroduceAndroidScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
