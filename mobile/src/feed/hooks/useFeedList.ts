import { useGetFeedQuery } from '@/common/types/gql.generated';
import { getMedia } from '@/profile/utils/getMedia';
import { getUsername } from '@/profile/utils/getUsername';
import { NetworkStatus } from '@apollo/client';

// types
import { IPostItem } from 'feed/types/feed';
import { filterFeed } from '../utils/filterFeed';

export const useFeedList = (
  filter: string,
): {
  data: IPostItem[];
  refresh(): void;
  loading: boolean;
} => {
  const { data, refetch, networkStatus } = useGetFeedQuery({
    notifyOnNetworkStatusChange: true,
  });

  const loading = NetworkStatus.ready === networkStatus ? false : true;

  if (!data || !data.getAllPosts) {
    return { data: [], refresh: refetch, loading };
  }
  const posts = data.getAllPosts
    .map((el) => {
      const username = getUsername(
        el?.author.firstName || '',
        el?.author.lastName || '',
      );
      const media = getMedia(el?.mediaContent);

      return {
        id: el?.id || '',
        author: {
          id: el?.author.id || '',
          name: username,
        },
        avatar: el?.author.avatar || null,
        createdAt: el?.createdAt || '',
        textContent: el?.textContent || null,
        mediaContent: media,
      };
    })
    .reverse();

  return { data: filterFeed(posts, filter), refresh: refetch, loading };
};
