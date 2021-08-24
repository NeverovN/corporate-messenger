import React, { memo } from 'react';
import { View, TextInput } from 'react-native';

import { lightTheme, darkTheme } from 'common/constants/colors';

// styles
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';

interface IAuthInput {
  placeholder: string;
  value: string;
  secure?: boolean;

  onChangeText(value: string): void;
}

const AuthInput: React.FC<IAuthInput> = (props) => {
  const styles = useStyles();
  const themeName = useSelector((state: RootState) => state.currentTheme.theme);
  const theme = themeName === 'light' ? lightTheme : darkTheme;

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
        placeholderTextColor={theme.secondary}
        secureTextEntry={props.secure || false}
        textAlign="center"
      />
    </View>
  );
};

export default memo(AuthInput);
