import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  IntroduceIOS: undefined;
  IntroduceAndroid: undefined;
  DashBoard: undefined;
};
export const RootStack = createStackNavigator<RootStackParamList>();
