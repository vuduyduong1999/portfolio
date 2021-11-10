import React from 'react';

import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { RootApp } from '@navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={'transparent'} />
      <RootApp />
      {/* <View style={{ flex: 1, backgroundColor: 'white' }} /> */}
    </NavigationContainer>
  );
};

export default App;
