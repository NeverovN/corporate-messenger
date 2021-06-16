import React, { FC, memo, useEffect, useState } from 'react';

// components
import EditEmailScreenView from '@/settings/components/EditEmailScreen';
import { useGetUserQuery } from '@/common/types/gql.generated';
import { useNavigation } from '@react-navigation/native';

// types
import { EditEmailNavigationProp } from 'settings/types/routes';

interface IEditEmailScreenContainerProps {}

const EditEmailScreenContainer: FC<IEditEmailScreenContainerProps> = () => {
  const navigation = useNavigation<EditEmailNavigationProp>();
  const { data } = useGetUserQuery();
  const [email, setEmail] = useState<string>(data?.getUser.email || '');

  useEffect(() => {
    navigation.setParams({ newEmail: email });
  }, [navigation, email]);

  return <EditEmailScreenView email={email} onEmailChange={setEmail} />;
};

export default memo(EditEmailScreenContainer);
