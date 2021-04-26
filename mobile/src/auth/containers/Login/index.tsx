import React, { FC, memo, useState } from 'react';
// components
import LoginView from '@/auth/components/Login';

// hooks
import { useHandleLogin } from '@/auth/hooks/useHandleLogin';

interface ILoginContainerProps {}

const LoginContainer: FC<ILoginContainerProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = useHandleLogin({ email, password });

  // const onLoginPress = () => {
  //   handleLogin(email, password);
  // };

  return (
    <LoginView
      emailValue={email}
      onChangeEmail={setEmail}
      password={password}
      onChangePassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};

export default memo(LoginContainer);
