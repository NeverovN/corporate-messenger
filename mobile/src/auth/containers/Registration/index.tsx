import React, { FC, memo, useState } from 'react';

// components
import RegisterView from 'auth/components/Register';

// hooks
import { useHandleRegistration } from 'auth/hooks/useHandleRegistration';

interface ILoginContainerProps {}

const RegistrationContainer: FC<ILoginContainerProps> = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isHiddenRep, setIsHiddenRep] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
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
      isHiddenRep={isHiddenRep}
      onIconPress={setIsHidden}
      onIconRepPress={setIsHiddenRep}
      handleRegistration={handleRegistration}
    />
  );
};

export default memo(RegistrationContainer);
