import React, { FC, memo, useState } from 'react';

// components
import LoginView from 'auth/components/Login';
import { useHandleLogin } from 'auth/hooks/useHandleLogin';

// hooks
import { useHandleSignUpRedirection } from 'auth/hooks/useHandleSingUpRedirection';
import { useOnIconPress } from '@/auth/hooks/useOnIconPressed';

interface ILoginContainerProps {}

const LoginContainer: FC<ILoginContainerProps> = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [iconName, setIconName] = useState<string>('eye-slash');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onIconPress = useOnIconPress(isHidden, setIsHidden, setIconName);
  const handleLogin = useHandleLogin({ email, password });
  const handleSignUpRedirection = useHandleSignUpRedirection();

  return (
    <LoginView
      email={email}
      onChangeEmail={setEmail}
      password={password}
      onChangePassword={setPassword}
      isHidden={isHidden}
      iconName={iconName}
      onIconPress={onIconPress}
      handleLogin={handleLogin}
      handleSignUpRedirection={handleSignUpRedirection}
    />
  );
};

export default memo(LoginContainer);
