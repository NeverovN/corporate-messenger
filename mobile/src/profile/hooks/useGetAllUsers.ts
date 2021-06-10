import { useGetUsersQuery } from '@/common/types/gql.generated';

export const useGetAllUsers = () => {
  const { data } = useGetUsersQuery();

  if (!data || !data.getUsers) {
    return [] as any;
  }

  return data.getUsers.map((el) => {
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
