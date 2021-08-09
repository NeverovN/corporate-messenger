import React, { memo } from 'react';
import { View, TextInput } from 'react-native';

import { lightTheme } from 'common/constants/colors';

// styles
import { useStyles } from './styles';

interface IAuthInput {
  placeholder: string;
  value: string;
  secure?: boolean;

  onChangeText(value: string): void;
}

const AuthInput: React.FC<IAuthInput> = (props) => {
  const styles = useStyles();
  // const { palette } = useTheme();
  return (
    <View style={styles.viewStyle}>
      <TextInput
        {...props}
        style={styles.inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={props.placeholder}
        placeholderTextColor={lightTheme.secondary}
        secureTextEntry={props.secure || false}
        textAlign="center"
      />
    </View>
  );
};

export default memo(AuthInput);
