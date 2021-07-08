import React, { memo } from 'react';
import { TextInput } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

// styles
import styles from './styles';

interface IAuthInput {
  placeholder: string;
  value: string;
  secure?: boolean;

  onChangeText(value: string): void;
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
      placeholderTextColor={COLORS.whiteOpacity}
      secureTextEntry={props.secure || false}
    />
  );
};

export default memo(AuthInput);
