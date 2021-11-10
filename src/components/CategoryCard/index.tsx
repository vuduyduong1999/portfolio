import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { SvgComponent } from '@common';

import { colors, responsive, typos } from '@styles';
import { ICategory } from '@types';
import { genSVGProps } from '@utils';

interface Props {
  category: ICategory;
  onPress?: () => void;
  style?: {
    marginHorizontal?: number;
    marginVertical?: number;
    marginBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
  };
}
export const CategoryCard = ({
  category: { nameIcon, title, backgroundColor = colors.SECONDARY },
  style,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, { backgroundColor }]}
    >
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperIcon}>
          <SvgComponent
            name={nameIcon}
            {...genSVGProps(24, 24, colors.PRIMARY)}
          />
        </View>
        <Text style={{ ...typos.md.bold, color: colors.WHITE }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: responsive(155),
    height: responsive(136),
    borderRadius: responsive(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperIcon: {
    width: responsive(51),
    height: responsive(51),
    borderRadius: responsive(12),
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsive(20),
  },
  wrapperContent: { alignItems: 'center' },
});
