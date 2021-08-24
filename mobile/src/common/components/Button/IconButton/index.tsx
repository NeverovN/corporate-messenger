import React, { FC, memo } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { IconType } from 'common/types/styles';

import Icon from 'common/components/Icon';
import { IconName } from '@/common/types/iconNames';

export interface IIconButtonProps {
  icon: IconName;
  iconColor?: string;
  iconType?: IconType;
  iconStyle?: TextStyle;
  containerStyle?: ViewStyle;

  onPress?(): void;
}

const IconButton: FC<IIconButtonProps> = (props) => {
  return (
    <TouchableOpacity style={props.containerStyle} onPress={props.onPress}>
      <Icon
        type={props.iconType}
        customStyle={props.iconStyle}
        name={props.icon}
        color={props.iconColor}
      />
    </TouchableOpacity>
  );
};

export default memo(IconButton);
