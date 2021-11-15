import React from 'react';

import { StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';

import { responsive, WIDTH } from '@styles';

import { DemoDecor_Lottie } from '@assets/lottie';

interface Props {}
export const Decor = ({}: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={DemoDecor_Lottie}
        autoPlay
        loop
        style={styles.sizeLottie}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    width: WIDTH,
  },
  sizeLottie: {
    width: responsive(250),
    height: responsive(250),
  },
});
