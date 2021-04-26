import React, { memo } from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';

interface CustomInput {
  containerStyle: StyleProp<ViewStyle>;
}

const Input: React.FC<CustomInput> = memo((props) => {
  return <TextInput {...props} style={props.styles} />;
});

export default Input;
