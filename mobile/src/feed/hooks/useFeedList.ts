// component
import TileView from '@/feed/components/Tile';
import { useGetFeedQuery } from '@/common/types/gql.generated';

export const useFeedList = () => {
  const { data } = useGetFeedQuery();

  console.log(data);

  if (!data || !data.getAllPosts) {
    return [] as any;
  }

  return data.getAllPosts.map((el) => {
    if (!el) {
      return [] as any;
    }
    return {
      data: TileView,
      id: el.id,
    };
  });
};
