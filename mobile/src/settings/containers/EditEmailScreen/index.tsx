import React, { FC, memo, useEffect, useState } from 'react';

// components
import EditEmailScreenView from '@/settings/components/EditEmailScreen';
import { useGetUserQuery } from '@/common/types/gql.generated';
import { useNavigation } from '@react-navigation/native';

// types
import { EditEmailNavigationProp } from 'settings/types/routes';
import HeaderRightEmail from '../HeaderRightEmail';

// hooks
import { useInitialEmail } from '@/settings/hooks/useInitialEmail';
import { useUpdateEmail } from '@/settings/hooks/useUpdateEmail';

interface IEditEmailScreenContainerProps {}

const EditEmailScreenContainer: FC<IEditEmailScreenContainerProps> = () => {
  const navigation = useNavigation<EditEmailNavigationProp>();
  const { data } = useGetUserQuery();
  const [email, setEmail] = useState<string>(data?.getUser.email || '');
  const initialEmail = useInitialEmail();
  const edit = useUpdateEmail(email);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightEmail
          initialValue={initialEmail}
          currentState={email}
          edit={edit}
        />
      ),
    });
  }, [navigation, email, edit, initialEmail]);

  return <EditEmailScreenView email={email} onEmailChange={setEmail} />;
};

export default memo(EditEmailScreenContainer);
