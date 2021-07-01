import { useGetFeedQuery } from '@/common/types/gql.generated';
import { getMedia } from '@/profile/utils/getMedia';
import { getUsername } from '@/profile/utils/getUsername';

// types
import { IPostItem } from 'feed/types/feed';

export const useFeedList = (): IPostItem[] => {
  const { data } = useGetFeedQuery();

  if (!data || !data.getAllPosts) {
    return [];
  }
  return data.getAllPosts.map((el) => {
    const username = getUsername(el?.author.firstName, el?.author.lastName);
    const media = getMedia(post?.mediaContent);

    return {
      id: el?.id || '',
      authorId: el?.author.id || '',
      author: username,
      avatar:
        el?.author.avatar ||
        'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
      createdAt: el?.createdAt || '',
      textContent: post?.textContent || '',
      mediaContent: media,

    };
  });
};
