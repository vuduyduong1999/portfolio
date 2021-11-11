import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { slides } from '@constants';
import { colors, HEIGHT, responsive, typos, WIDTH } from '@styles';
import { RootNavigationProp } from '@types';

interface Props {
  scrollX: Animated.SharedValue<number>;
}

export const Button = ({ scrollX }: Props) => {
  const { navigate } = useNavigation<RootNavigationProp>();
  const inputRange = [(slides.length - 2) * WIDTH, (slides.length - 1) * WIDTH];

  const tranY = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [HEIGHT / 4, 0]),
  );
  const opacity = useDerivedValue(() =>
    interpolate(scrollX.value, inputRange, [0, 1]),
  );
  const onPress = () => {
    navigate('DashBoard');
  };
  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    alignSelf: 'center',
    bottom: '8%',
    opacity: opacity.value,
    transform: [
      {
        translateY: tranY.value,
      },
    ],
  }));
  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.txt}>Khám phá thêm</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  btn: {
    borderRadius: responsive(4),
    width: responsive(150),
    height: responsive(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.DARK,
  },
  txt: { ...typos.sm.bold, color: colors.DARK },
});
