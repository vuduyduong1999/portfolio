import { NameSVG } from '@common';

import { DemoStackParamList, RootStackParamList } from '@navigation';

export interface ICategory {
  nameIcon: NameSVG;
  title: string;
  screen?: keyof RootStackParamList | keyof DemoStackParamList;
  backgroundColor?: string;
}
