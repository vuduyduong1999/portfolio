export interface Amount_Chart {
  amount: string;
  currency: string;
  scale: string;
}

export interface PercentChange_Chart {
  hour: number;
  day: number;
  week: number;
  month: number;
  year: number;
}

export interface LatestPrice_Chart {
  amount: Amount_Chart;
  timestamp: string;
  percent_change: PercentChange_Chart;
}

export type PriceList = [string, number][];

export interface DataPoints_Chart {
  percent_change: number;
  prices: PriceList;
}

export interface Prices_Chart {
  latest: string;
  latest_price: LatestPrice_Chart;
  hour: DataPoints_Chart;
  day: DataPoints_Chart;
  week: DataPoints_Chart;
  month: DataPoints_Chart;
  year: DataPoints_Chart;
  all: DataPoints_Chart;
}
