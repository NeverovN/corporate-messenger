import React, { FC, memo, useEffect, useState } from 'react';

// components
import RegisterView from 'auth/components/Register';

// hooks
import { useHandleRegistration } from 'auth/hooks/useHandleRegistration';
import { useOnIconPress } from '@/auth/hooks/useOnIconPressed';
import { useNavigation } from '@react-navigation/native';
import HeaderBackButtonWithoutText from '../../../common/components/HeaderBackButtonWithoutText';

interface ILoginContainerProps {}

const RegistrationContainer: FC<ILoginContainerProps> = () => {
  const navigation = useNavigation();
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [iconName, setIconName] = useState<string>('eye-slash');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const onIconPress = useOnIconPress(isHidden, setIsHidden, setIconName);
  const handleRegistration = useHandleRegistration({
    email,
    password,
    passwordRepeat,
    firstName,
    lastName,
  });

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBackButtonWithoutText />,
    });
  }, [navigation]);

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
      firstName={firstName}
      onChangeFirstName={setFirstName}
      lastName={lastName}
      onChangeLastName={setLastName}
      handleRegistration={handleRegistration}
    />
  );
};

export default memo(RegistrationContainer);
