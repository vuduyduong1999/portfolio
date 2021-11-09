import React from 'react';

import {
  DashBoardScreen,
  IntroduceAndroidScreen,
  IntroduceIOSScreen,
} from '@screens';

import { RootStack } from './navigator';

export const renderRoot = () => {
  return (
    <>
      <RootStack.Screen
        name={'IntroduceAndroid'}
        component={IntroduceAndroidScreen}
      />
      <RootStack.Screen name={'IntroduceIOS'} component={IntroduceIOSScreen} />
      <RootStack.Screen name={'DashBoard'} component={DashBoardScreen} />
    </>
  );
};
