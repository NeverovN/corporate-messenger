
import { useGetUserTokenQuery } from '@/common/types/gql.generated';

export default function useTestAPI(): string | null {
  const { data } = useGetUserTokenQuery({
    variables: {
      username: 'test',
      password: 'pass',
    },
  });

  return data?.getUserToken?.accessToken || null;
