import { IPostItem } from 'feed/types/feed';
import {
  useGetPostsQuery,
  useNewPostSubscription,
} from 'common/types/gql.generated';
import { getMedia } from '../utils/getMedia';
import { getName } from '../utils/getName';
import { MediaUploader } from '@/chat/chatScreen/utils/MediaUploader';

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
    const avatar = MediaUploader.getUserAvatarFromFirebase(
      post?.author.avatar || null,
    );
    return {
      id: post?.id || '',
      author: {
        id: post?.author.id || '',
        name,
      },
      avatar,
      createdAt: post?.createdAt || '',
      textContent: post?.textContent || '',
      mediaContent: media,
    };
  });

  return posts;
};
