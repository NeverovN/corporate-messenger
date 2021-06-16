import { useGetUserQuery } from '@/common/types/gql.generated';
import { useState, useEffect } from 'react';

export const useInitialEmail = () => {
  const { data } = useGetUserQuery();
  const [initialEmail, setInitialEmail] = useState<string>(
    data?.getUser.email || '',
  );

  useEffect(() => {
    setInitialEmail(data?.getUser.email || '');
  }, [data]);

  return initialEmail;
};
