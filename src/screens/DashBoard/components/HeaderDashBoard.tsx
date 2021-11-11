import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SvgComponent } from '@common';

import { colors, hitSlop, responsive, typos } from '@styles';
import { callByPhone, genSVGProps } from '@utils';

import { Avatar } from '@assets/images';

interface Props {}
export const HeaderDashBoard = ({}: Props) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = responsive(15) + top;
  const start = { x: 0, y: 1 };
  const end = { x: 0, y: 0.95 };

  const onCallPress = () => callByPhone('0346602086');
  return (
    <View style={[styles.container, { paddingTop }]}>
      <LinearGradient
        colors={colors.LINEAR}
        start={start}
        end={end}
        style={styles.linear}
        pointerEvents="none"
      />
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperNameAndAva}>
          <Image source={Avatar} style={styles.image} />
          <View style={styles.wrapperName}>
            <Text style={styles.txtName}>Vũ Duy Dương</Text>
            <Text style={styles.txtPosition}>Mobile developer</Text>
          </View>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsive(20),
    paddingBottom: responsive(30),
    marginBottom: responsive(20),
  },
  linear: {
    position: 'absolute',
    width: responsive(2220),
    height: responsive(2220),
    borderRadius: responsive(2220),
    bottom: 0,
    alignSelf: 'center',
  },
  wrapperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperNameAndAva: { flexDirection: 'row', alignItems: 'center' },
  wrapperName: { marginLeft: responsive(10) },
  image: {
    width: responsive(50),
    height: responsive(50),
    borderRadius: responsive(4),
  },
  txtName: {
    ...typos.md.bold,
    color: colors.WHITE,
    marginBottom: responsive(5),
  },
  txtPosition: { ...typos.sm.regular, color: colors.WHITE },
  txtPhone: {
    ...typos.sm.bold,
    color: colors.WHITE,
    marginLeft: responsive(10),
  },
  touchCall: { flexDirection: 'row', alignItems: 'center' },
});
