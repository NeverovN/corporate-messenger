// component
import { useGetFriendFeedQuery } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';
import { NetworkStatus } from '@apollo/client';

// types
import { IPostItem } from 'feed/types/feed';

export const useFriendFeedList = (): {
  data: IPostItem[];
  refresh(): void;
  loading: boolean;
} => {
  const { data, refetch, networkStatus } = useGetFriendFeedQuery({
    notifyOnNetworkStatusChange: true,
  });

  const loading = NetworkStatus.ready === networkStatus ? false : true;

  if (!data || !data.getFriendPosts) {
    return { data: [], refresh: refetch, loading };
  }

  const posts = data.getFriendPosts
    .map((el) => {
      const username = getUsername(
        el?.author.firstName || '',
        el?.author.lastName || '',
      );

      return {
        id: el?.id || '',
        author: {
          id: el?.author.id || '',
          name: username,
        },
        avatar: el?.author.avatar || null,
        createdAt: el?.createdAt || '',
        textContent: el?.textContent || null,
        mediaContent: el?.mediaContent || null,
      };
    })
    .reverse();

  return { data: posts, refresh: refetch, loading };
};
