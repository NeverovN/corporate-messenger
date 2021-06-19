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
    avatar:
      data?.getUser.lastName ||
      'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
    friends: data?.getUser.friends || [],
  };
};
