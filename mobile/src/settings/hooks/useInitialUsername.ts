import { useGetUserQuery } from '@/common/types/gql.generated';
import { useEffect, useState } from 'react';

export const useInitialUsername = (): [string, string] => {
  const { data } = useGetUserQuery();
  const [initialFirstName, setInitialFirstName] = useState<string>(
    data?.getUser.firstName || '',
  );
  const [initialLastName, setInitialLastName] = useState<string>(
    data?.getUser.lastName || '',
  );

  useEffect(() => {
    setInitialFirstName(data?.getUser.firstName || '');
  }, [data?.getUser.firstName]);

  useEffect(() => {
    setInitialLastName(data?.getUser.lastName || '');
  }, [data?.getUser.lastName]);

  return [initialFirstName, initialLastName];
};
