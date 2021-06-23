import React, { memo } from 'react';
import { TextInput } from 'react-native';

// styles
import styles from './styles';

interface IAuthInput {
  placeholder: string;
  value: string;
  onChangeText(value: string): void;
  secure?: boolean;
}

const AuthInput: React.FC<IAuthInput> = (props) => {
  return (
    <TextInput
      {...props}
      style={styles.inputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={props.placeholder}
      secureTextEntry={props.secure || false}
    />
  );
};

export default memo(AuthInput);
