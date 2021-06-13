import { useGetUserQuery } from '@/common/types/gql.generated';

export const useGetCurrentUserId = () => {
  const { data, loading } = useGetUserQuery();
  if (!loading) {
    if (data) {
      return data.getUser.id;
    }
  }

  return '';
};
