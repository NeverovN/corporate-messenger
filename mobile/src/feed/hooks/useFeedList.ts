import { useGetFeedQuery } from '@/common/types/gql.generated';
import { getMedia } from '@/profile/utils/getMedia';
import { getUsername } from '@/profile/utils/getUsername';

// types
import { IPostItem } from 'feed/types/feed';
import { filterFeed } from '../utils/filterFeed';

export const useFeedList = (filter: string): IPostItem[] => {
  const { data } = useGetFeedQuery();

  if (!data || !data.getAllPosts) {
    return [];
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

  return filterFeed(posts, filter);
};
