import React from 'react';

import {
  AboutMeScreen,
  DashBoardScreen,
  IntroduceScreen,
  MyProjectScreen,
} from '@screens';

import { RootStack } from './navigator';

export const renderRoot = () => {
  return (
    <>
      <RootStack.Screen name={'Introduce'} component={IntroduceScreen} />
      <RootStack.Screen name={'DashBoard'} component={DashBoardScreen} />
      <RootStack.Screen name={'AboutMe'} component={AboutMeScreen} />
      <RootStack.Screen name={'MyProject'} component={MyProjectScreen} />
    </>
  );
};
