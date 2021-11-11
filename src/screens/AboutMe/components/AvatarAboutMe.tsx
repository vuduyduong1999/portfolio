import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { FocusAwareStatusBar, SvgComponent } from '@common';

import { colors, hitSlop, responsive, typos, WIDTH } from '@styles';
import { callByPhone, genSVGProps } from '@utils';

import { Avatar } from '@assets/images';

interface Props {}
export const AvatarAboutMe = ({}: Props) => {
  const color = ['rgba(255,255,255,0)', colors.SECONDARY];
  const start = { x: 0, y: 0.6 };
  const end = { x: 0, y: 1 };
  const onCallPress = () => callByPhone('0346602086');

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
          <View>
            <Text style={styles.txtName}>Vũ Duy Dương</Text>
            <Text style={styles.txtPosition}>Mobile developer</Text>
          </View>
          <TouchableOpacity
            hitSlop={hitSlop}
            onPress={onCallPress}
            style={styles.touchCall}
          >
            <SvgComponent name="Call" {...genSVGProps(16, 16, colors.WHITE)} />
            <Text style={styles.txtPhone}>034 660 2086</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  txtName: { ...typos.lg.bold, color: colors.WHITE },
  txtPosition: {
    ...typos.sm.regular,
    color: colors.WHITE,
    marginTop: responsive(5),
  },
  touchCall: { flexDirection: 'row', alignItems: 'center' },
  txtPhone: {
    ...typos.sm.bold,
    color: colors.WHITE,
    marginLeft: responsive(10),
  },
});
