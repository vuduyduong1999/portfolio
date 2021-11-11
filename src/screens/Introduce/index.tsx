import React from 'react';

import { Platform } from 'react-native';

import { FashionSlider, LiquidSlider } from '@components';

interface Props {}
export const IntroduceScreen = ({}: Props) => {
  // if (Platform.OS === 'android') {
  //   return null;
  // }

  return <FashionSlider />;
  // return <LiquidSlider />;
};
