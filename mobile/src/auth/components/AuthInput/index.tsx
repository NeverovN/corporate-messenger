import React, { memo } from 'react';
import {
  StyleProp,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

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
      {...props}
      style={styles.inputStyle}
      onChangeText={props.onChangeText}
    />
  );
};

export default memo(AuthInput);
