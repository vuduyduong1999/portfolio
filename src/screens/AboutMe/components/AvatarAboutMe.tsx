import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { FocusAwareStatusBar } from '@common';

import { colors, responsive, typos, WIDTH } from '@styles';

import { Avatar } from '@assets/images';

interface Props {}
export const AvatarAboutMe = ({}: Props) => {
  const color = ['rgba(255,255,255,0)', colors.SECONDARY];
  const start = { x: 0, y: 0.6 };
  const end = { x: 0, y: 1 };
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <Image source={Avatar} style={styles.container} />
      <LinearGradient
        colors={color}
        start={start}
        end={end}
        style={[StyleSheet.absoluteFillObject, { justifyContent: 'flex-end' }]}
      >
        <View style={styles.wrapperName}>
          <Text style={styles.txtName}>Vũ Duy Dương</Text>
          <Text style={styles.txtPosition}>Mobile developer</Text>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { width: WIDTH, height: responsive(300), overflow: 'hidden' },
  wrapperName: {
    paddingHorizontal: responsive(20),
    paddingBottom: responsive(10),
  },
  txtName: { ...typos.lg.bold, color: colors.WHITE },
  txtPosition: {
    ...typos.sm.regular,
    color: colors.WHITE,
    marginTop: responsive(5),
  },
});
