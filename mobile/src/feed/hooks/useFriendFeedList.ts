// component
import TileView from '@/feed/components/Tile';
import { useGetFriendFeedQuery } from '@/common/types/gql.generated';

export const useFriendFeedList = () => {
  const { data } = useGetFriendFeedQuery();

  if (!data || !data.getFriendPosts) {
    return [] as any;
  }

  return data.getFriendPosts.map((el) => {
    if (!el) {
      return [] as any;
    }
    return {
      data: TileView,
      id: el.id,
    };
  });
};
