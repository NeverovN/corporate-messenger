import React, { FC, memo } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { TextType } from 'common/types/styles';

import Text from 'common/components/Text';

export interface ITextButtonProps {
  label: string;
  textType?: TextType;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;

  onPress?(): void;
}

const TextButton: FC<ITextButtonProps> = (props) => {
  return (
    <TouchableOpacity style={props.containerStyle} onPress={props.onPress}>
      <Text style={props.labelStyle} type={props.textType}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(TextButton);
