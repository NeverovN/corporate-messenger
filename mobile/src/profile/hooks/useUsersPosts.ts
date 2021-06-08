import { FC, useEffect } from 'react';
import {
  useGetPostsQuery,
  useNewPostSubscription,
} from 'common/types/gql.generated';

// components
import TileView from 'feed/components/Tile';

interface IPost {
  data: FC;
  id: number;
}

export const useUsersPosts = () => {
  const { data: queryData, refetch } = useGetPostsQuery();
  const { data: subData } = useNewPostSubscription();

  useEffect(() => {
    refetch();
  }, [subData]);

  if (
    typeof queryData === 'undefined' ||
    typeof queryData.getPosts === 'undefined' ||
    queryData.getPosts === null
  ) {
    return [];
  }

  const posts: IPost[] = queryData.getPosts.map((_, i) => ({
    data: TileView,
    id: i,
  }));

  return posts;
};
