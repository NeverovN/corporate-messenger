import { useGetUserQuery } from '@/common/types/gql.generated';

// types;
import { IUser } from 'settings/types/user';

export const useGetCurrentUser = (): IUser => {
  const { data } = useGetUserQuery(); // TODO: rename to `useGetCurrentUserQuery`
  // it can take userId and return different users based on provided id, so i don't think it's good idea to rename it

  return {
    id: data?.getUser.id || '',
    email: data?.getUser.email || '',
    firstName: data?.getUser.firstName || '',
    lastName: data?.getUser.lastName || '',
    avatar:
      data?.getUser.avatar ||
      'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
    friends: data?.getUser.friends || [],
  };
};
