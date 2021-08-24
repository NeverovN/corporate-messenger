import React, { FC, memo, useState } from 'react';

// components
import EditUsernameScreenView from '@/settings/components/EditUsernameScreen';

// hooks
import { useInitialUsername } from '@/settings/hooks/useInitialUsername';
import { useUpdateUsername } from '@/settings/hooks/useUpdateUsername';

interface IEditUsernameScreenContainerProps {}

const EditUsernameScreenContainer: FC<IEditUsernameScreenContainerProps> = () => {
  const names = useInitialUsername();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const edit = useUpdateUsername(
    firstName,
    lastName,
    setFirstName,
    setLastName,
  );

  return (
    <EditUsernameScreenView
      names={names}
      currentFirstName={firstName}
      currentLastName={lastName}
      onChangeFirstName={setFirstName}
      onChangeLastName={setLastName}
      edit={edit}
    />
  );
};

export default memo(EditUsernameScreenContainer);
