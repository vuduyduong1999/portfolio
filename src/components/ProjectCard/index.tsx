import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { colors, responsive, typos } from '@styles';
import { IProject } from '@types';

interface Props {
  project: IProject;
}
export const ProjectCard = ({ project }: Props) => {
  const { logo, company, description, name } = project;
  return (
    <LinearGradient
      colors={[colors.SECONDARY, colors.WHITE]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.4 }}
      style={styles.container}
    >
      <LinearGradient
        colors={colors.LINEAR}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.wrapperAvatar}
      >
        <View style={styles.wrapperImage}>
          <Image source={logo} style={styles.image} resizeMode="contain" />
        </View>
      </LinearGradient>
      <Text style={styles.txtName}>{name}</Text>
      <Text style={styles.txtCompany}>{company}</Text>
      <Text style={styles.txtDescription}>{description}</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: responsive(345),
    height: responsive(550),
    alignItems: 'center',
    paddingTop: '20%',
    borderRadius: responsive(20),
  },
  wrapperAvatar: {
    width: responsive(210),
    height: responsive(210),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsive(105),
    marginBottom: responsive(50),
  },
  wrapperImage: {
    width: responsive(198),
    height: responsive(198),
    backgroundColor: colors.WHITE,
    borderRadius: responsive(105),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: responsive(100), height: responsive(100) },
  txtName: {
    ...typos.xl3.bold,
    textAlign: 'center',
    marginBottom: responsive(5),
  },
  txtCompany: {
    ...typos.md.semiBold,
    textAlign: 'center',
    marginBottom: responsive(5),
  },
  txtDescription: {
    ...typos.xs.regular,
    width: responsive(275),
    textAlign: 'center',
  },
});
