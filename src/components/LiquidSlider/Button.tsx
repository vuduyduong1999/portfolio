import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { colors, responsive, responsiveByHeight, typos } from '@styles';
import { RootNavigationProp } from '@types';

interface Props {
  show: boolean;
}

export const Button = ({ show }: Props) => {
  const { navigate } = useNavigation<RootNavigationProp>();
  const onPress = () => {
    navigate('DashBoard');
  };

  const opacity = useDerivedValue(() => (show ? withTiming(1) : withTiming(0)));

  const aniStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <TouchableOpacity
      disabled={!show}
      onPress={onPress}
      style={styles.container}
    >
      <Animated.View style={[styles.view, aniStyle]}>
        <Text style={styles.txt}>Khám phá thêm</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: responsiveByHeight(100),
  },
  view: {
    borderRadius: responsive(4),
    width: responsive(150),
    height: responsive(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.WHITE,
  },
  txt: { ...typos.sm.bold, color: colors.WHITE },
});
