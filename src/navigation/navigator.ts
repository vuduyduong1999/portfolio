import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Introduce: undefined;
  DashBoard: undefined;
  AboutMe: undefined;
  MyProject: undefined;
  MyDemo: undefined;
  MySkill: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

export type DemoStackParamList = {
  DemoDashboard: undefined;
  Chart: undefined;
};

export const DemoStackNavigator = createStackNavigator<DemoStackParamList>();
