import {
  useGetUserQuery,
  useGetUsersQuery,
} from '@/common/types/gql.generated';

// utils
import { filterUsers } from 'profile/utils/filterUsers';

export const useGetFilteredUsers = (searchString: string) => {
  const { data } = useGetUsersQuery();
  const { data: currUser, loading } = useGetUserQuery();

  if (!data || !data.getUsers) {
    return [];
  }

  if (loading) {
    return [];
  }

  if (!currUser || !currUser.getUser) {
    throw Error('unauthorized user');
  }

  // removes current user out of list of all users
  const usersWithoutCurrent = data.getUsers.filter(
    (user) => user && user.id !== currUser.getUser.id,
  );

  const mappedUsers = usersWithoutCurrent.map((el) => {
    if (!el) {
      return;
    }
    return {
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      avatar: el.avatar || '',
    };
  });

  const filteredUsers = filterUsers(mappedUsers, searchString);

  return filteredUsers;
};
