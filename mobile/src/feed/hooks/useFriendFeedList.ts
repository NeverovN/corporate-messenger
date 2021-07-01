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
    const username = getUsername(el?.author.firstName, el?.author.lastName);

    return {
      id: el?.id || '',
      authorId: el?.author.id || '',
      author: username,
      avatar:
        el?.author.avatar ||
        'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
      createdAt: el?.createdAt || '',
    };
  });
};
