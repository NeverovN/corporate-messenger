import { FC } from 'react';
import {
  useGetPostsQuery,
  useNewPostSubscription,
} from 'common/types/gql.generated';

// components
import TileView from 'feed/components/Tile';
import { tokenVar } from '@/common/cache/cache';

interface IPost {
  data: FC;
  id: number;
}

export const useUsersPosts = () => {
  const { data: queryData } = useGetPostsQuery();
  const { data: subData } = useNewPostSubscription();

  console.log(tokenVar());

  console.log(queryData?.getPosts?.map((_, i) => i));

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

  if (subData) {
    // in perfect world it must add new post to profile screen
    // in my world data never receives information and i have no idea why
    console.log('data received');
    posts.push({ data: TileView, id: posts.length + 1 });
  }

  return posts;
};
