import React, { memo } from 'react';
import { TextInput } from 'react-native';

// styles
import styles from './styles';

interface IAuthInput {
  placeholder?: string;
  value: string;
  onChangeText(value: string): void;
}

const AuthInput: React.FC<IAuthInput> = (props) => {
  return (
    <TextInput
      // {...props}
      style={styles.inputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

export default memo(AuthInput);
