import React, { memo, FC } from 'react';
import { View } from 'react-native';

interface ILoginViewProps {
  emailValue: string;
  onChangeEmail(email: string): void;

  password: string;
  onChangePassword(password: string): void;

  handleLogin(): void;
}

const LoginView: FC<ILoginViewProps> = () => {
  return <View />;
};

export default memo(LoginView);
