import {
  useGetUserQuery,
  useGetUsersQuery,
} from '@/common/types/gql.generated';

export const useGetAllUsers = () => {
  const { data } = useGetUsersQuery();
  const { data: currUser, loading } = useGetUserQuery();

  if (!data || !data.getUsers) {
    return [] as any;
  }

  if (loading) {
    return [] as any;
  }

  if (!currUser || !currUser.getUser) {
    throw Error('unauthorized user');
  }

  // removes current user out of list of all users
  const filteredUsers = data.getUsers.filter(
    (user) => user && user.id !== currUser.getUser.id,
  );

  return filteredUsers.map((el) => {
    if (!el) {
      return [] as any;
    }
    return {
      data: el,
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      avatar: el.avatar,
    };
  });
};
