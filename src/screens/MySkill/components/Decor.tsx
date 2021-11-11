import React from 'react';

import { StyleSheet, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { colors, responsive } from '@styles';

interface Props {}
export const Decor = ({}: Props) => {
  const start = { x: 0, y: 0 };
  const end = { x: 0, y: 0.5 };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.LINEAR}
        start={start}
        end={end}
        style={[styles.ball, styles.ballAbsolute]}
      />
      <LinearGradient
        start={start}
        end={end}
        colors={colors.LINEAR}
        style={styles.ball}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -responsive(500),
    right: -responsive(500),
  },
  ball: {
    width: responsive(1000),
    height: responsive(1000),
    borderRadius: responsive(500),
  },
  ballAbsolute: { position: 'absolute', bottom: responsive(200) },
});
