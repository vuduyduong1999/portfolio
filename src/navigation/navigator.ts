import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  IntroduceIOS: undefined;
  IntroduceAndroid: undefined;
  DashBoard: undefined;
  AboutMe: undefined;
  MyProject: undefined;
  MyDemo: undefined;
  MyBlog: undefined;
};
export const RootStack = createStackNavigator<RootStackParamList>();
