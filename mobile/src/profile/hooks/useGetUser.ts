import { useGetUserQuery } from 'common/types/gql.generated';

export const useGetUser = () => {
  const { data } = useGetUserQuery();
  console.log('getUser: ', data?.getCurrentUser);
  if (!data || !data.getCurrentUser) {
    return 'defUserFName defUserSName';
  }
  return `${data.getCurrentUser.firstName} ${data.getCurrentUser?.lastName}`;
};
