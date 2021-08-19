import { useGetUserQuery } from '@/common/types/gql.generated';

export const useGetAvatar = (id?: string) => {
  const { data } = useGetUserQuery({
    variables: { id },
    notifyOnNetworkStatusChange: true,
  });
  if (!data || !data.getUser) {
    return null;
  }

  const avatar = data.getUser.avatar;
  return avatar ? avatar : null;
};
