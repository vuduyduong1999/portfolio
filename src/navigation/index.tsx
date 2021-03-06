import React, { useEffect } from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { SvgComponent } from '@common';

import { colors, responsive } from '@styles';
import { genSVGProps } from '@utils';

import { RootStack, RootStackParamList, DemoStackParamList } from './navigator';
import { renderRoot } from './renderRoot';

const RootApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown:
            route.name === 'AboutMe' ||
            route.name === 'MyProject' ||
            route.name === 'MySkill',
          headerStyle: styles.headerStyle,
          headerTransparent: true,
          title: '',
          headerLeft: ({ onPress }) => {
            return (
              <TouchableOpacity onPress={onPress} style={styles.touchBack}>
                <SvgComponent
                  name="Back"
                  {...genSVGProps(28, 28, colors.DARK)}
                />
              </TouchableOpacity>
            );
          },
        };
      }}
      initialRouteName={'Introduce'}
    >
      {renderRoot()}
    </RootStack.Navigator>
  );
};
export { RootApp, RootStackParamList, DemoStackParamList };
const styles = StyleSheet.create({
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
  },
  touchBack: {
    width: responsive(42),
    height: responsive(42),
    borderRadius: responsive(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsive(20),
    backgroundColor: colors.WHITE,
  },
});
