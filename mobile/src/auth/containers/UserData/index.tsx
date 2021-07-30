import React, { FC, memo, useEffect, useState } from 'react';

// components
import UserData from 'auth/components/UserData';

// hooks
import { useFinishRegistration } from '@/auth/hooks/useFinishRegistration';
import { useNavigation } from '@react-navigation/native';
import HeaderBackButtonWithoutText from '../../../common/components/HeaderBackButtonWithoutText';

interface IUserDataContainerProps {}

const UserDataContainer: FC<IUserDataContainerProps> = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const navigation = useNavigation();
  const finishRegistration = useFinishRegistration(firstName, lastName);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBackButtonWithoutText />,
    });
  }, [navigation]);

  return (
    <UserData
      firstName={firstName}
      onChangeFirstName={setFirstName}
      lastName={lastName}
      onChangeLastName={setLastName}
      finishRegistration={finishRegistration}
    />
  );
};

export default memo(UserDataContainer);
