import { useGetUserQuery } from 'common/types/gql.generated';

export const useGetUser = (id?: string) => {
  const { data } = useGetUserQuery({ variables: { id: id ? id : null } });

  if (!data || !data.getUser) {
    return '';
  }

  return `${data.getUser.firstName} ${data.getUser?.lastName}`;
};
