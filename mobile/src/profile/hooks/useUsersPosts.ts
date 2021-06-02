import { FC } from 'react';
import { useGetUsersPostsQuery } from 'common/types/gql.generated';

// consts
import { tokenVar } from 'common/cache/cache';

// components
import TileView from 'feed/components/Tile';

interface IPost {
  data: FC;
  id: number;
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

  const posts: IPost[] = data.getUsersPosts.map((_, i) => ({
    data: TileView,
    id: i,
  }));

  return posts;
};
