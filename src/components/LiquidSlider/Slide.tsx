import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import { responsive, typos, WIDTH } from '@styles';
import { ISlide } from '@types';

interface Props {
  slide: ISlide;
}

export const Slide = ({
  slide: { color, description, picture, title },
}: Props) => {
  return (
    <>
      <View style={[styles.container, { backgroundColor: color }]}>
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
