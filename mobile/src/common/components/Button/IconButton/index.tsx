import React, { FC, memo } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { IconType } from 'common/types/styles';

import Icon from 'common/components/Icon';

export interface IIconButtonProps {
  icon: string;
  iconType?: IconType;
  iconStyle?: TextStyle;
  containerStyle?: ViewStyle;

  onPress?(): void;
}

const IconButton: FC<IIconButtonProps> = (props) => {
  return (
    <TouchableOpacity style={props.containerStyle} onPress={props.onPress}>
      <Icon type={props.iconType} name={props.icon} />
    </TouchableOpacity>
  );
};

export default memo(IconButton);
