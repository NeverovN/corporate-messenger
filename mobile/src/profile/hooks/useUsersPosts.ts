import { FC } from 'react';
import {
  useGetPostsQuery,
  useNewPostSubscription,
} from 'common/types/gql.generated';

// components
import TileView from 'feed/components/Tile';

interface IPostArr {
  data: FC;
  id: number;
}

export const useUsersPosts = () => {
  const { data: queryData } = useGetPostsQuery();
  const { data: subData } = useNewPostSubscription();

  if (
    typeof queryData === 'undefined' ||
    typeof queryData.getPosts === 'undefined' ||
    queryData.getPosts === null
  ) {
    return [];
  }

  const posts: IPostArr[] = queryData.getPosts.map((_, ind) => ({
    data: TileView,
    id: ind,
  }));

  if (subData) {
    // in perfect world it must add new post to profile screen
    // in my world data never receives information and i have no idea why
    console.log('data received');
    posts.push({ data: TileView, id: posts.length + 1 });
  }

  return posts;
};
