export interface IAmount_Chart {
  amount: string;
  currency: string;
  scale: string;
}

export interface IPercentChange_Chart {
  hour: number;
  day: number;
  week: number;
  month: number;
  year: number;
}

export interface ILatestPrice_Chart {
  amount: IAmount_Chart;
  timestamp: string;
  percent_change: IPercentChange_Chart;
}

export type IPriceList = [string, number][];

export interface IDataPoints_Chart {
  percent_change: number;
  prices: IPriceList;
  candles: ICandleChart[];
}

export interface ICandleChart {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}
export interface IDataChart {
  label: string;
  maxPrice: number;
  minPrice: number;
  percent_change: number;
  line: {
    timestamp: number;
    value: number;
  }[];
  candles: ICandleChart[];
}

export interface IChart {
  shortName: string;
  data: IDataChart;
}
