import { useGetUserQuery } from '@/common/types/gql.generated';
import { useState, useEffect } from 'react';

export const useInitialEmail = () => {
  const { data } = useGetUserQuery();
  const [initialEmail, setInitialEmail] = useState<string>(
    data?.getUser.email || '',
  );

  const receivedEmail = data?.getUser.email || '';
  
  useEffect(() => {
    setInitialEmail(receivedEmail);
  }, [receivedEmail]);

  return initialEmail;
};
