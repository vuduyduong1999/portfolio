import { createContext, Dispatch, SetStateAction } from 'react';

interface IChartContext {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  isCandleChart: boolean;
  setIsCandleChart: Dispatch<SetStateAction<boolean>>;
}
export const ChartContext = createContext<IChartContext>({} as IChartContext);
