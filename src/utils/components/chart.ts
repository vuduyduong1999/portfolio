import * as d3 from 'd3';
import { parse } from 'react-native-redash';

import { responsive, WIDTH } from '@styles';
import { DataPoints_Chart } from '@types';

const walk = (input: number[], output: [number, number]) => {
  return d3
    .scaleLinear()
    .domain([Math.min(...input), Math.max(...input)])
    .range(output);
};

export const genDataChart = (dataPoints: DataPoints_Chart, label: string) => {
  const priceList = dataPoints.prices
    .slice(0, 60)
    .map((item) => [parseFloat(item[0]), item[1]] as [number, number]);

  const dates = priceList.map((item) => item[1]);
  const walkX = walk(dates, [0, WIDTH - responsive(20)]);
  const prices = priceList.map((item) => item[0]);
  const walkY = walk(prices, [WIDTH - responsive(20), 0]);

  const line = d3
    .line()
    .curve(d3.curveBasis)
    .x(([_, date]) => walkX(date))
    .y(([price, _]) => walkY(price));

  const path = parse(line(priceList) as string);

  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  return {
    label,
    maxPrice,
    minPrice,
    percent_change: dataPoints.percent_change,
    path,
  };
};
