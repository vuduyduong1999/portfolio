import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import { colors, responsive, typos, WIDTH } from '@styles';
import { ISlide } from '@types';

interface Props {
  slide: ISlide;
}
export const SlideImage = ({ slide }: Props) => {
  const { title, picture } = slide;
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.image} />
      <Text style={styles.txtTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignItems: 'center',
    paddingTop: '28%',
  },
  image: {
    width: responsive(200),
    height: responsive(200),
    borderRadius: responsive(75),
  },
  txtTitle: {
    ...typos.xl3.bold,
    color: colors.WHITE,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '10%',
  },
});
