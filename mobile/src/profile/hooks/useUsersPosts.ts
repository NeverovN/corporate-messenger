import { IPostItem } from '@/profile/types/post';
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
      author: name,
      avatar:
        post?.author.avatar ||
        'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
      createdAt: post?.createdAt || '',
      textContent: post?.textContent || '',
      mediaContent: media,
    };
  });

  return posts;
};
