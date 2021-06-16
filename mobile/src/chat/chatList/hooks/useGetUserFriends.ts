import { useGetUserQuery } from '@/common/types/gql.generated';

export const useGetUserFriends = () => {
  const { data } = useGetUserQuery();

  if (!data || !data.getUser) {
    return [] as any;
  }

  return data.getUser.friends.map((el) => {
    return {
      data: el,
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      avatar: el.avatar,
    };
  });
};
