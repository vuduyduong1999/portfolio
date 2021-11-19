import React, { useContext, useEffect, useRef } from 'react';

import { FlatList } from 'react-native';

import { ChartContext } from '@contexts';

import { CandleChartContent } from './CandleChart';
import { LineChartContent } from './LineChart';

interface Props {}

const arrComponents: React.FC[] = [LineChartContent, CandleChartContent];
const keyExtractor = (_: React.FC, index: number) => `${index}`;
const renderItem = ({ item: Component }: { item: React.FC }) => <Component />;
export const Chart = ({}: Props) => {
  const refFlatList = useRef<FlatList>(null);

  const { isCandleChart } = useContext(ChartContext);
  useEffect(() => {
    const index = isCandleChart ? 1 : 0;
    refFlatList.current?.scrollToIndex({ index, animated: true });
  }, [isCandleChart]);
  return (
    <FlatList
      ref={refFlatList}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      pagingEnabled
      data={arrComponents}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
