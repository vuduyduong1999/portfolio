import React from 'react';

import { StatusBar, View } from 'react-native';

import { LiquidSlider } from '@components';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <LiquidSlider />
    </View>
  );
};

export default App;
