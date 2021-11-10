import React, { useEffect } from 'react';

import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { SvgComponent } from '@common';

import { colors, responsive } from '@styles';
import { genSVGProps } from '@utils';

import { RootStack, RootStackParamList } from './navigator';
import { renderRoot } from './renderRoot';

const RootApp = () => {
  const initialRouteName: keyof RootStackParamList =
    Platform.OS === 'ios' ? 'Introduce' : 'DashBoard';
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerShown: route.name === 'AboutMe' || route.name === 'MyProject',
          headerStyle: styles.headerStyle,
          headerTransparent: route.name === 'AboutMe',
          title: '',
          headerLeft: ({ onPress }) => {
            const backgroundColor =
              route.name === 'AboutMe' ? colors.WHITE : 'transparent';
            return (
              <TouchableOpacity
                onPress={onPress}
                style={[styles.touchBack, { backgroundColor }]}
              >
                <SvgComponent
                  name="Back"
                  {...genSVGProps(24, 24, colors.DARK)}
                />
              </TouchableOpacity>
            );
          },
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
  touchBack: {
    width: responsive(32),
    height: responsive(32),
    borderRadius: responsive(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsive(20),
  },
});
