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
    const media = getMedia(el?.mediaContent);

    return {
      id: el?.id || '',
      authorId: el?.author.id || '',
      author: username,
      avatar:
        el?.author.avatar ||
        'https://cdn3.vectorstock.com/i/1000x1000/26/97/continuous-one-line-drawing-circle-minimalism-art-vector-25552697.jpg',
      createdAt: el?.createdAt || '',
      textContent: el?.textContent || '',
      mediaContent: media,
    };
  });
};
