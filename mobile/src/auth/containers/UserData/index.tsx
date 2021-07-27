import React, { FC, memo, useState } from 'react';

// components
import UserData from 'auth/components/UserData';

// hooks
import { useFinishRegistration } from '@/auth/hooks/useFinishRegistration';

interface IUserDataContainerProps {}

const UserDataContainer: FC<IUserDataContainerProps> = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const finishRegistration = useFinishRegistration(firstName, lastName);

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
