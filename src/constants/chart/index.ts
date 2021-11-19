import { responsive, WIDTH } from '@styles';
import { IChart, IDataPoints_Chart } from '@types';

import Chart from './chart.json';

export const WIDTH_CHOOSE_OPTION_CHART = (WIDTH - 5 * responsive(10, true)) / 5;

const genDataChart = (dataPoints: IDataPoints_Chart, label: string) => {
  const line = dataPoints.prices.map((item) => ({
    timestamp: parseFloat(item[0]),
    value: item[1],
  }));

  const prices = line.map((item) => item.value);

  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  return {
    label,
    maxPrice,
    minPrice,
    percent_change: dataPoints.percent_change,
    line,
    candles: dataPoints.candles,
  };
};

export const ArrChart: IChart[] = [
  {
    data: genDataChart(
      Chart.data.prices.hour as IDataPoints_Chart,
      'Last Hour',
    ),
    shortName: '1H',
  },
  {
    data: genDataChart(Chart.data.prices.day as IDataPoints_Chart, 'Today'),
    shortName: '1D',
  },
  {
    data: genDataChart(
      Chart.data.prices.week as IDataPoints_Chart,
      'Last Week',
    ),
    shortName: '1W',
  },
  {
    data: genDataChart(
      Chart.data.prices.month as IDataPoints_Chart,
      'Last Month',
    ),
    shortName: '1M',
  },
  {
    data: genDataChart(Chart.data.prices.all as IDataPoints_Chart, 'All time'),
    shortName: 'ALL',
  },
];
