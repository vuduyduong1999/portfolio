import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';

import { ChartScreen, DemoDashboardScreen } from '@screens';

import { SvgComponent } from '@common';

import { colors, responsive } from '@styles';
import { genSVGProps } from '@utils';

import { DemoStackNavigator } from './navigator';

export const DemoStack = () => {
  return (
    <DemoStackNavigator.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: true,
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
    >
      <DemoStackNavigator.Screen
        name={'DemoDashboard'}
        component={DemoDashboardScreen}
      />
      <DemoStackNavigator.Screen name={'Chart'} component={ChartScreen} />
    </DemoStackNavigator.Navigator>
  );
};

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
