import React, { memo, FC } from 'react';
import { View } from 'react-native';

// components
import AuthInput from '../AuthInput';
import SignButton from '../SignButton';

// styles
import styles from './styles';

interface ILoginViewProps {
  email: string;
  onChangeEmail(email: string): void;

  password: string;
  onChangePassword(password: string): void;

  handleLogin(): void;
}

const LoginView: FC<ILoginViewProps> = (props) => {
  return (
    <View style={styles.loginStyle}>
      <AuthInput
        placeholder="enter your login"
        value={props.email}
        onChangeText={props.onChangeEmail}
      />
      <AuthInput
        placeholder="enter your password"
        value={props.password}
        onChangeText={props.onChangePassword}
      />
      <SignButton title="SIGN IN" onPress={props.handleLogin} />
    </View>
  );
};

export default memo(LoginView);
