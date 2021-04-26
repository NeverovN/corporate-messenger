import React, { memo } from 'react';
import { TextInput } from 'react-native';

interface CustomInput {
  styles: object;
}

const Input: React.FC<CustomInput> = memo((props) => {
  return <TextInput {...props} style={props.styles} />;
});

export default Input;
