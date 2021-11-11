import React from 'react';

import { Image, StyleSheet, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { colors, responsive, typos } from '@styles';
import { ISkill } from '@types';

interface Props {
  skill: ISkill;
  style?: {
    marginHorizontal?: number;
    marginVertical?: number;
    marginBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
  };
}
export const SkillCard = ({ skill, style }: Props) => {
  const { description, logo, name } = skill;
  return (
    <LinearGradient
      colors={[colors.SECONDARY, colors.WHITE]}
      style={[styles.container, style]}
    >
      <Image source={logo} style={styles.image} resizeMode="contain" />
      <Text style={styles.txtName}>{name}</Text>
      <Text style={styles.txtDescription}>{description}</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: responsive(335),
    height: responsive(300),
    borderRadius: responsive(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: responsive(100), height: responsive(100) },
  txtName: { ...typos.lg.bold, marginTop: responsive(20) },
  txtDescription: {
    ...typos.xs.regular,
    marginTop: responsive(5),
    textAlign: 'center',
    width: responsive(280),
  },
});
