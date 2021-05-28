import { FC } from 'react';
import { useGetUsersPostsQuery } from 'common/types/gql.generated';

// consts
import { tokenVar } from 'common/cache/cache';

// components
import TileView from 'feed/components/Tile';

interface IPostArr {
  data: FC;
  index: number;
}

export const useUsersPosts = () => {
  const { data } = useGetUsersPostsQuery({
    variables: {
      token: tokenVar(),
    },
  });

  if (
    typeof data === 'undefined' ||
    typeof data.getUsersPosts === 'undefined' ||
    data.getUsersPosts === null
  ) {
    return [];
  }

  const posts: IPostArr[] = new Array();

  for (let i = 0; i < data.getUsersPosts.length; i++) {
    posts.push({
      data: TileView,
      index: i,
    });
  }

  return posts;
};
