import { FC } from 'react';
import { useGetPostsQuery } from 'common/types/gql.generated';

// components
import TileView from 'feed/components/Tile';

interface IPostArr {
  data: FC;
  id: number;
}

export const useUsersPosts = () => {
  const { data } = useGetPostsQuery();

  if (
    typeof data === 'undefined' ||
    typeof data.getPosts === 'undefined' ||
    data.getPosts === null
  ) {
    return [];
  }

  const posts: IPostArr[] = new Array();

  for (let i = 0; i < data.getPosts.length; i++) {
    posts.push({
      data: TileView,
      id: i,
    });
  }

  return posts;
};
