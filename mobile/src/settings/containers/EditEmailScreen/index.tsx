import React, { FC, memo, useState } from 'react';

// components
import EditEmailScreenView from '@/settings/components/EditEmailScreen';
import { useGetUserQuery } from '@/common/types/gql.generated';
import { useOnEmailChange } from '@/settings/hooks/useOnEmailChange';

interface IEditEmailScreenContainerProps {}

const EditEmailScreenContainer: FC<IEditEmailScreenContainerProps> = () => {
  const { data } = useGetUserQuery();
  const [email, setEmail] = useState<string>(data?.getUser.email || '');

  const onEmailChange = useOnEmailChange(setEmail);
  return <EditEmailScreenView email={email} onEmailChange={onEmailChange} />;
};

export default memo(EditEmailScreenContainer);
