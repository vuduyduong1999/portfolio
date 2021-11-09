import React from 'react';

import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { LiquidSlider } from '@components';

import { RootApp } from '@navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={'transparent'} />
      <RootApp />
    </NavigationContainer>
  );
};

export default App;
