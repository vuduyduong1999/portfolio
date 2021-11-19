import React, { useContext } from 'react';

import { StyleSheet, View } from 'react-native';

import { ArrChart } from '@constants/chart';
import { CandlestickChart } from 'react-native-wagmi-charts';

import { ChartContext } from '@contexts';

import { colors, responsive, typos, WIDTH } from '@styles';

interface Props {}
const SIZE_CHART = WIDTH - responsive(40, true);

export const CandleChartContent = ({}: Props) => {
  const { currentIndex } = useContext(ChartContext);

  const data = ArrChart[currentIndex].data;
  return (
    <CandlestickChart.Provider data={data.candles}>
      <View style={styles.container}>
        <View style={styles.wrapperChart}>
          <CandlestickChart width={SIZE_CHART} height={SIZE_CHART}>
            <CandlestickChart.Candles
              positiveColor={colors.SECONDARY}
              negativeColor={colors.ERROR}
            />
            <CandlestickChart.Crosshair>
              <CandlestickChart.Tooltip>
                <CandlestickChart.PriceText style={typos.xs.semiBold} />
              </CandlestickChart.Tooltip>
            </CandlestickChart.Crosshair>
          </CandlestickChart>
        </View>
      </View>
    </CandlestickChart.Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    paddingVertical: responsive(15),
    paddingHorizontal: responsive(20),
  },
  wrapperChart: {
    width: SIZE_CHART,
    height: SIZE_CHART,
    backgroundColor: colors.WHITE,
    borderRadius: responsive(4),
  },
});
