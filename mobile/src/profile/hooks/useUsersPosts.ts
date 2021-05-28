import { FC } from 'react';
import { useNewPostSubscription } from 'common/types/gql.generated';

// consts
import { tokenVar } from 'common/cache/cache';

// components
import TileView from 'feed/components/Tile';

interface IPostArr {
  data: FC;
  index: number;
}

export const useUsersPosts = () => {
  const { data, loading, error } = useNewPostSubscription({
    variables: {
      token: tokenVar(),
    },
  });

  if (loading) {
    console.log('loading posts');
    return [];
  } else if (error) {
    console.log(error);
    return [];
  } else if (!data || !data.getUsersPosts) {
    return [];
  }

  const posts: IPostArr[] = new Array();

  for (let i = 0; i < data.getUsersPosts.length; i++) {
    posts.push({
      data: TileView,
      index: i,
    });
  }

  return [];
};
