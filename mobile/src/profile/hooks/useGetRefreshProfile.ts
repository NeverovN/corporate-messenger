import {
  useGetPostsQuery,
  useGetUserQuery,
} from '@/common/types/gql.generated';
import { NetworkStatus } from '@apollo/client';

export const useGetRefreshProfile = (
  userId?: string,
): { refresh(): void; loading: boolean } => {
  const { refetch: userRefetch, networkStatus: userStatus } = useGetUserQuery({
    variables: { id: userId },
    notifyOnNetworkStatusChange: true,
  });
  const {
    refetch: postsRefresh,
    networkStatus: postsStatus,
  } = useGetPostsQuery({
    variables: { author: userId },
    notifyOnNetworkStatusChange: true,
  });

  const loading =
    NetworkStatus.ready === userStatus && NetworkStatus.ready === postsStatus
      ? false
      : true;

  const refresh = () => {
    userRefetch();
    postsRefresh();
  };

  return { refresh, loading };
};
