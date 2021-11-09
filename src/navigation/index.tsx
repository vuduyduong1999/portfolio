import React, { useEffect } from 'react';

import { Platform, StyleSheet } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { RootStack, RootStackParamList } from './navigator';
import { renderRoot } from './renderRoot';

const RootApp = () => {
  const initialRouteName: keyof RootStackParamList =
    Platform.OS === 'ios' ? 'IntroduceIOS' : 'DashBoard';
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerShown: false,
          headerStyle: styles.headerStyle,
        };
      }}
      initialRouteName={initialRouteName}
    >
      {renderRoot()}
    </RootStack.Navigator>
  );
};
export { RootApp, RootStackParamList };
const styles = StyleSheet.create({
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
  },
});
