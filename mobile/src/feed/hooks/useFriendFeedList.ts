// component
import TileView from '@/feed/components/Tile';
import { useGetFriendFeedQuery } from '@/common/types/gql.generated';

export const useFriendFeedList = () => {
  const { data } = useGetFriendFeedQuery();

  return data?.getFriendPosts?.map((el) => {
    if (!el) {
      return {
        data: null,
        id: '',
      };
    }
    return {
      data: TileView,
      id: el.id,
    };
  });
};
