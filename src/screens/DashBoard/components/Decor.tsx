import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors, responsive, WIDTH } from '@styles';

import { DecorDashboard_Lottie } from '@assets/lottie';

interface Props {}
export const Decor = ({}: Props) => {
  const start = { y: 0.5, x: 0 };
  const end = { y: 2, x: 0 };
  return (
    <LinearGradient
      colors={[colors.WHITE, colors.SECONDARY]}
      start={start}
      end={end}
      style={styles.container}
    >
      <LottieView
        source={DecorDashboard_Lottie}
        autoPlay
        loop
        style={styles.sizeLottie}
      />
    </LinearGradient>
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
