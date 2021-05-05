import React, { FC, memo, useState } from 'react';
// components
import LoginView from 'auth/components/Login';
import { useHandleLogin } from 'auth/hooks/useHandleLogin';

// hooks
import { useHandleSignUpRedirection } from 'auth/hooks/useHandleSingUpRedirection';

interface ILoginContainerProps {}

const LoginContainer: FC<ILoginContainerProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = useHandleLogin({ email, password });
  const handleSignUpRedirection = useHandleSignUpRedirection({
    email,
    password,
  });

  return (
    <LoginView
      email={email}
      onChangeEmail={setEmail}
      password={password}
      onChangePassword={setPassword}
      handleLogin={handleLogin}
      handleSignUpRedirection={handleSignUpRedirection}
    />
  );
};

export default memo(LoginContainer);
