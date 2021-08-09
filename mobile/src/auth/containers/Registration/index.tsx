import React, { FC, memo, useState } from 'react';

// components
import RegisterView from 'auth/components/Register';

// hooks
import { useHandleRegistration } from 'auth/hooks/useHandleRegistration';
import { useOnIconPress } from '@/auth/hooks/useOnIconPressed';

interface ILoginContainerProps {}

const RegistrationContainer: FC<ILoginContainerProps> = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [iconName, setIconName] = useState<string>('eye-slash');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');

  const onIconPress = useOnIconPress(isHidden, setIsHidden, setIconName);
  const handleRegistration = useHandleRegistration({
    email,
    password,
    passwordRepeat,
  });

  return (
    <RegisterView
      email={email}
      onChangeEmail={setEmail}
      password={password}
      onChangePassword={setPassword}
      passwordRepeat={passwordRepeat}
      onChangePasswordRepeat={setPasswordRepeat}
      isHidden={isHidden}
      iconName={iconName}
      onIconPress={onIconPress}
      handleRegistration={handleRegistration}
    />
  );
};

export default memo(RegistrationContainer);
