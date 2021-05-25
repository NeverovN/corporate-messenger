import { useGetUserByGuidQuery, User } from '@/common/types/gql.generated';

export default function useTestAPI(): User | null {
  const guid = 'test';

  const { data } = useGetUserByGuidQuery({
    variables: { guid },
  });

  return data?.getUserByGuid || null;
}
