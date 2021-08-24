import React, { FC, memo, useState } from 'react';

// components
import LoginView from 'auth/components/Login';
import { useHandleLogin } from 'auth/hooks/useHandleLogin';

// hooks
import { useHandleSignUpRedirection } from 'auth/hooks/useHandleSingUpRedirection';

interface ILoginContainerProps {}

const LoginContainer: FC<ILoginContainerProps> = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = useHandleLogin({ email, password });
  const handleSignUpRedirection = useHandleSignUpRedirection();

  return (
    <LoginView
      email={email}
      onChangeEmail={setEmail}
      password={password}
      onChangePassword={setPassword}
      isHidden={isHidden}
      onIconPress={setIsHidden}
      handleLogin={handleLogin}
      handleSignUpRedirection={handleSignUpRedirection}
    />
  );
};

export default memo(LoginContainer);
