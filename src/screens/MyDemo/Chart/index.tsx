import React, { useRef, useState } from 'react';

import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';
import LinearGradient from 'react-native-linear-gradient';

import { ChartContext } from '@contexts';

import { Chart, ChooseRangeTime, HeaderLineChart, Switch } from './components';
import { FocusAwareStatusBar } from '@common';

import { colors, responsive } from '@styles';

interface Props {}
export const ChartScreen = ({}: Props) => {
  const [isCandleChart, setIsCandleChart] = useState(false);
  const headerHeight = useHeaderHeight();
  const paddingTop = headerHeight + responsive(20);

  const [currentIndex, setCurrentIndex] = useState(0);

  const valueContext = {
    currentIndex,
    setCurrentIndex,
    isCandleChart,
    setIsCandleChart,
  };

  return (
    <ChartContext.Provider value={valueContext}>
      <LinearGradient
        colors={[colors.DARK, colors.SECONDARY]}
        style={[styles.container, { paddingTop }]}
      >
        <FocusAwareStatusBar barStyle="light-content" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.contentContainer}
        >
          <HeaderLineChart />
          <Chart />
          <ChooseRangeTime />
          <Switch />
        </ScrollView>
      </LinearGradient>
    </ChartContext.Provider>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: {
    paddingBottom: responsive(50),
  },
});
