import { useGetUserQuery } from 'common/types/gql.generated';

export const useGetUserName = () => {
  const { data } = useGetUserQuery();
  console.log('getUser: ', data?.getUser);
  if (!data || !data.getUser) {
    return 'defUserFName defUserSName';
  }
  return `${data.getUser.firstName} ${data.getUser?.lastName}`;
};
