// component
import { useGetFriendFeedQuery } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';

// types
import { IPostItem } from 'feed/types/feed';

export const useFriendFeedList = (): IPostItem[] => {
  const { data } = useGetFriendFeedQuery();

  if (!data || !data.getFriendPosts) {
    return [] as any;
  }

  return data.getFriendPosts.map((el) => {
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
      avatar:
        el?.author.avatar ||
        'https://cdn3.vectorstock.com/i/1000x1000/26/97/continuous-one-line-drawing-circle-minimalism-art-vector-25552697.jpg',
      createdAt: el?.createdAt || '',
      textContent: null,
      mediaContent: null,
    };
  });
};
