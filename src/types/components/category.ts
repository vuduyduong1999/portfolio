import { NameSVG } from '@common';

import { RootStackParamList } from '@navigation';

export interface ICategory {
  nameIcon: NameSVG;
  title: string;
  screen?: keyof RootStackParamList;
  backgroundColor?: string;
}
