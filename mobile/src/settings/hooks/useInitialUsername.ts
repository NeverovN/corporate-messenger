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

  const receivedFirstName = data?.getUser.firstName || '';
  const receivedLastName = data?.getUser.lastName || '';

  useEffect(() => {
    setInitialFirstName(receivedFirstName);
  }, [receivedFirstName]);

  useEffect(() => {
    setInitialLastName(receivedLastName);
  }, [receivedLastName]);

  return [initialFirstName, initialLastName];
};
