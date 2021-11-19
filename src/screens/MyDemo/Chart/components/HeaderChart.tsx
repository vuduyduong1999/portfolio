import React, { useContext } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { ArrChart } from '@constants/chart';

import { ChartContext } from '@contexts';

import { SvgComponent } from '@common';

import { colors, responsive, typos } from '@styles';
import { genSVGProps } from '@utils';

interface Props {}

export const HeaderLineChart = ({}: Props) => {
  const { currentIndex } = useContext(ChartContext);

  const priceChange = ArrChart[currentIndex].data.percent_change;
  const color = priceChange < 0 ? colors.ERROR : colors.DARK;
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <SvgComponent name="Bitcoin_logo" {...genSVGProps(28, 28)} />
        <Text style={typos.sm.bold}>Bitcoin</Text>
      </View>
      <View style={{ justifyContent: 'space-between' }}>
        <Text style={[styles.priceChange, { color }]}>
          {priceChange.toFixed(5)}
        </Text>
        <Text style={styles.txtPriceChange}>Price change</Text>
        <Text style={styles.txtLabel}>{ArrChart[currentIndex].data.label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsive(80),
    backgroundColor: colors.WHITE,
    marginHorizontal: responsive(20),
    borderRadius: responsive(5),
    padding: responsive(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperTitle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperPrice: {
    height: responsive(15),
  },
  priceChange: { ...typos.md.bold, textAlign: 'right' },
  txtPriceChange: { ...typos.xs2.regular, textAlign: 'right' },
  txtLabel: { ...typos.sm.semiBold, textAlign: 'right' },
});
