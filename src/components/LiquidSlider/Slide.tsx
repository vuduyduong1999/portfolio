import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import Color from 'color';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

import { HEIGHT, responsive, typos, WIDTH } from '@styles';

import { ISlide } from './type';

interface Props {
  slide: ISlide;
}

export const Slide = ({
  slide: { color, description, picture, title },
}: Props) => {
  const lighterColor = Color(color).lighten(0.8).toString();

  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy={'35%'}>
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={WIDTH} height={HEIGHT} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </>
  );
};

const SIZE = responsive(200);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 150,
    alignItems: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
  },
  title: {
    ...typos.xl2.bold,
    width: WIDTH - responsive(100),
    marginTop: responsive(100),
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    ...typos.sm.semiBold,
    width: WIDTH - responsive(100),
    color: 'white',
    textAlign: 'center',
  },
});
