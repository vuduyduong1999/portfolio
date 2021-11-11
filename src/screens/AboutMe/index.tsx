import React from 'react';

import { StyleSheet, View } from 'react-native';

import { AvatarAboutMe, Content } from './components';

import { colors } from '@styles';

interface Props {}
export const AboutMeScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <AvatarAboutMe />
      <Content />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
