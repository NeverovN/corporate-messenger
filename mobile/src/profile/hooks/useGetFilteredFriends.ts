import { useGetUserQuery } from '@/common/types/gql.generated';
import { NetworkStatus } from '@apollo/client';

// utils
import { filterUsers } from 'profile/utils/filterUsers';

export const useGetFilteredFriends = (filter: string) => {
  const { data: currUser, refetch, networkStatus } = useGetUserQuery({
    notifyOnNetworkStatusChange: true,
  });

  const loading = NetworkStatus.ready === networkStatus ? false : true;

  if (!currUser || !currUser.getUser) {
    throw Error('unauthorized user');
  }

  const friends = currUser.getUser.friends.map((el) => {
    if (!el) {
      return;
    }

    return {
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      avatar: el.avatar || null,
    };
  });

  const filteredUsers = filterUsers(friends, filter);

  return { filteredUsers, loading, refresh: refetch };
};
