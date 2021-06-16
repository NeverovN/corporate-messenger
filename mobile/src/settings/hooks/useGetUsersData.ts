import { useGetUserQuery } from '@/common/types/gql.generated';

// types;
import { IUser } from 'settings/types/user';

export const useGetUsersData = (): IUser => {
  const { data } = useGetUserQuery();

  return {
    id: data?.getUser.id || '',
    email: data?.getUser.email || '',
    firstName: data?.getUser.firstName || '',
    lastName: data?.getUser.lastName || '',
    avatar: data?.getUser.lastName || '',
    friends: data?.getUser.friends || [],
  };
};
