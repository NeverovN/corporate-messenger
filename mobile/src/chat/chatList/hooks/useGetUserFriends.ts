import { useGetUserQuery } from '@/common/types/gql.generated';
import { filterUsers } from '@/profile/utils/filterUsers';

export const useGetUserFriends = (searchString: string) => {
  const { data } = useGetUserQuery();

  if (!data || !data.getUser) {
    return [];
  }

  const friends = data.getUser.friends.map((el) => {
    return {
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      avatar: el.avatar || '',
    };
  });

  const filteredFriends = filterUsers(friends, searchString);

  return filteredFriends;
};
