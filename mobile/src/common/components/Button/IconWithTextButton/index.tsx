import React, { FC, memo } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { IconType, TextType } from 'common/types/styles';

import Icon from 'common/components/Icon';
import Text from 'common/components/Text';

import styles from './styles';

export interface IIconWithTextButtonProps {
  icon: string;
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
      <Icon type={props.iconType} name={props.icon} />
      <Text type={props.textType} style={props.labelStyle}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(IconButton);
