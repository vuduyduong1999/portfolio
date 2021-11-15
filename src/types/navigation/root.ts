import { CompositeNavigationProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { DemoStackParamList, RootStackParamList } from '@navigation';

export type RootNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  StackNavigationProp<DemoStackParamList>
>;
