import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title?: string;
  textStyle: object;
  viewStyle: object;
  onPress?(): void;
}

const CustomButton: React.FC<CustomButtonProps> = memo((props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={props.viewStyle}>
        <Text style={props.textStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default CustomButton;
