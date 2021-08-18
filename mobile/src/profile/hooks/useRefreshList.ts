import { useGetUsersQuery } from '../../common/types/gql.generated';
import { NetworkStatus } from '@apollo/client';

export const useRefreshList = (): [loading: boolean, refetch: () => void] => {
  const { refetch, networkStatus } = useGetUsersQuery({
    notifyOnNetworkStatusChange: true,
  });

  const loading = NetworkStatus.ready === networkStatus ? false : true;
  return [loading, refetch];
};
