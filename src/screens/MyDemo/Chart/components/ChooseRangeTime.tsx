import React, { useContext } from 'react';

import { Pressable, StyleSheet, View } from 'react-native';

import { ArrChart, WIDTH_CHOOSE_OPTION_CHART } from '@constants/chart';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { ChartContext } from '@contexts';

import { colors, responsive, typos } from '@styles';
import { IChart } from '@types';

interface Props {}
const heightIndicator = responsive(40);
const borderRadius = responsive(4);
export const ChooseRangeTime = ({}: Props) => {
  const { setCurrentIndex } = useContext(ChartContext);

  const renderItem = (item: IChart, key: number) => {
    const onPress = () => setCurrentIndex(key);
    return (
      <Pressable key={key} onPress={onPress} style={styles.wrapperText}>
        <Animated.Text style={typos.xs.bold}>{item.shortName}</Animated.Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Indicator />
      {ArrChart.map(renderItem)}
    </View>
  );
};

const Indicator = () => {
  const { currentIndex } = useContext(ChartContext);

  const tranX = useDerivedValue(() =>
    withTiming(currentIndex * WIDTH_CHOOSE_OPTION_CHART, {
      easing: Easing.sin,
    }),
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: WIDTH_CHOOSE_OPTION_CHART,
      height: heightIndicator,
      left: borderRadius,
      backgroundColor: colors.WHITE,
      borderRadius,
      transform: [{ translateX: tranX.value }],
    };
  });
  return <Animated.View style={animatedStyle} />;
};

const styles = StyleSheet.create({
  container: {
    height: responsive(50, true),
    borderRadius: responsive(5),
    marginHorizontal: responsive(20),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.WHITE,
    paddingHorizontal: responsive(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapperText: {
    width: WIDTH_CHOOSE_OPTION_CHART,
    height: heightIndicator,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
