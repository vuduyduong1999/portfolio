import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Introduce: undefined;
  DashBoard: undefined;
  AboutMe: undefined;
  MyProject: undefined;
  MyDemo: undefined;
  MyBlog: undefined;
};
export const RootStack = createStackNavigator<RootStackParamList>();
