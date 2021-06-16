import React, { FC, memo, useEffect, useState } from 'react';
import { useGetUserQuery } from '@/common/types/gql.generated';

// components
import EditUsernameScreenView from '@/settings/components/EditUsernameScreen';

// hooks
import { useNavigation } from '@react-navigation/native';

interface IEditUsernameScreenContainerProps {}

const EditUsernameScreenContainer: FC<IEditUsernameScreenContainerProps> = () => {
  const navigation = useNavigation();
  const { data } = useGetUserQuery();
  const [firstName, setFirstName] = useState<string>(
    data?.getUser.firstName || '',
  );
  const [lastName, setLastName] = useState<string>(
    data?.getUser.lastName || '',
  );

  useEffect(() => {
    navigation.setParams({ newFirstName: firstName, newLastName: lastName });
  }, [navigation, firstName, lastName]);

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
