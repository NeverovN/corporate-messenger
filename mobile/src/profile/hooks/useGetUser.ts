import { useGetCurrentUserQuery } from 'common/types/gql.generated';

export const useGetUser = () => {
  const { data } = useGetCurrentUserQuery();
  if (!data || !data.getCurrentUser) {
    return 'defUserFName defUserSName';
  }
  return `${data.getCurrentUser.firstName} ${data.getCurrentUser?.lastName}`;
};
