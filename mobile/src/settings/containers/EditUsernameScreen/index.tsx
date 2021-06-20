import React, { FC, memo, useEffect, useState } from 'react';
import { useGetUserQuery } from '@/common/types/gql.generated';

// components
import EditUsernameScreenView from '@/settings/components/EditUsernameScreen';

// hooks
import { useNavigation } from '@react-navigation/native';
import { useInitialUsername } from '@/settings/hooks/useInitialUsername';
import { useUpdateUsername } from '@/settings/hooks/useUpdateUsername';

// types
import { EditUsernameNavigationProp } from 'settings/types/routes';
import HeaderRightUsername from '../HeaderRightUsername';

interface IEditUsernameScreenContainerProps {}

const EditUsernameScreenContainer: FC<IEditUsernameScreenContainerProps> = () => {
  const navigation = useNavigation<EditUsernameNavigationProp>();
  const { data } = useGetUserQuery();
  const names = useInitialUsername();
  const [firstName, setFirstName] = useState<string>(
    data?.getUser.firstName || '',
  );
  const [lastName, setLastName] = useState<string>(
    data?.getUser.lastName || '',
  );

  const edit = useUpdateUsername(firstName, lastName);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightUsername
          initialNames={names}
          newNames={[firstName, lastName]}
          edit={edit}
        />
      ),
    });
  }, [navigation, names, firstName, lastName, edit]);

  return (
    <EditUsernameScreenView
      firstName={firstName}
      onChangeFirstName={setFirstName}
      lastName={lastName}
      onChangeLastName={setLastName}
    />
  );
};

export default memo(EditUsernameScreenContainer);
