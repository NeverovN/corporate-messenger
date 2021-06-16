import { useGetUserQuery } from '@/common/types/gql.generated';

export const useGetUserFriends = () => {
  const { data } = useGetUserQuery();

  if (!data || !data.getUser) {
    return [];
  }

  return data.getUser.friends.map((el) => {
    return {
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      avatar: el.avatar || '',
    };
  });
};
