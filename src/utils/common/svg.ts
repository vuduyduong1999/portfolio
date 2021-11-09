import { ViewStyle } from 'react-native';

import { Vector } from 'react-native-redash';

import { responsive } from '@styles';

export const genSVGProps = (
  width: number,
  height: number,
  color?: string,
  style?: ViewStyle,
) => {
  return {
    width: responsive(width),
    height: responsive(height),
    color,
    style,
  };
};

export const curve = (c1: Vector, c2: Vector, to: Vector) => {
  'worklet';
  return `C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`;
};
