import { ViewStyle } from 'react-native';

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
