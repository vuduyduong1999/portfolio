import React, { useContext } from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { ChartContext } from '@contexts';

import { colors, responsive, typos } from '@styles';

interface Props {}
export const Switch = ({}: Props) => {
  const { isCandleChart, setIsCandleChart } = useContext(ChartContext);

  const text = isCandleChart
    ? 'Switch to Line Chart'
    : 'Switch to Candle Chart';
  const onPress = () => setIsCandleChart(!isCandleChart);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ ...typos.md.bold, color: colors.WHITE }}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: { alignSelf: 'center', marginVertical: responsive(15) },
});
