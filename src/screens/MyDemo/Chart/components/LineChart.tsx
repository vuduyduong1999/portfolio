import React, { useContext } from 'react';

import { StyleSheet, View } from 'react-native';

import { ArrChart } from '@constants/chart';
import { LineChart } from 'react-native-wagmi-charts';

import { ChartContext } from '@contexts';

import { colors, responsive, typos, WIDTH } from '@styles';

interface Props {}
const SIZE_CHART = WIDTH - responsive(40, true);

export const LineChartContent = ({}: Props) => {
  const { currentIndex } = useContext(ChartContext);

  const data = ArrChart[currentIndex].data;
  return (
    <LineChart.Provider
      data={data.line}
      xLength={data.line.length}
      yRange={{ min: data.minPrice, max: data.maxPrice }}
    >
      <View style={styles.container}>
        <View style={styles.wrapperChart}>
          <LineChart width={SIZE_CHART} height={SIZE_CHART}>
            <LineChart.Path width={responsive(3)} color={colors.SECONDARY}>
              <LineChart.Gradient />
            </LineChart.Path>
            <LineChart.CursorCrosshair color={colors.PRIMARY}>
              <LineChart.Cursor type="line">
                <LineChart.Tooltip>
                  <LineChart.PriceText style={typos.md.bold} />
                </LineChart.Tooltip>
              </LineChart.Cursor>
            </LineChart.CursorCrosshair>
          </LineChart>
        </View>
      </View>
    </LineChart.Provider>
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
