import { IPostItem } from 'feed/types/feed';
import {
  useGetPostsQuery,
  useNewPostSubscription,
} from 'common/types/gql.generated';
import { getMedia } from '../utils/getMedia';
import { getName } from '../utils/getName';

export const useUsersPosts = (userId?: string) => {
  const { data: queryData } = useGetPostsQuery({
    variables: { author: userId || null },
  });
  useNewPostSubscription();

  if (
    typeof queryData === 'undefined' ||
    typeof queryData.getPosts === 'undefined' ||
    queryData.getPosts === null
  ) {
    return [];
  }

  const posts: IPostItem[] = queryData.getPosts.map((post) => {
    const name = getName(post?.author.firstName, post?.author.lastName);
    const media = getMedia(post?.mediaContent);
    return {
      id: post?.id || '',
      author: {
        id: post?.author.id || '',
        name,
      },
      avatar:
        post?.author.avatar ||
        'https://cdn3.vectorstock.com/i/1000x1000/26/97/continuous-one-line-drawing-circle-minimalism-art-vector-25552697.jpg',
      createdAt: post?.createdAt || '',
      textContent: post?.textContent || '',
      mediaContent: media,
    };
  });

  return posts;
};
