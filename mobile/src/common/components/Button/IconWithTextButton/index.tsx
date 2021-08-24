import React, { FC, memo } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { IconType, TextType } from 'common/types/styles';

import Icon from 'common/components/Icon';
import Text from 'common/components/Text';

import styles from './styles';
import { IconName } from '../../../types/iconNames';

export interface IIconWithTextButtonProps {
  icon: IconName;
  iconColor?: string;
  iconType?: IconType;
  iconStyle?: TextStyle;
  label: string;
  textType?: TextType;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;

  onPress?(): void;
}

const IconButton: FC<IIconWithTextButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}>
      <Icon
        type={props.iconType}
        customStyle={props.iconStyle}
        name={props.icon}
        color={props.iconColor}
      />
      <Text type={props.textType} style={props.labelStyle}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(IconButton);
