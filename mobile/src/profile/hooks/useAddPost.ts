import { newPost } from '@/common/cache/cache';
import {
  useCreatePostMutation,
  PostFragmentFragmentDoc,
} from 'common/types/gql.generated';

export const useAddPost = () => {
  const [createPost] = useCreatePostMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getPosts(exPosts = []) {
            try {
              const post = cache.writeFragment({
                fragment: PostFragmentFragmentDoc,
                data: data.createPost,
              });
              return [...exPosts, post];
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });
  return async () => {
    try {
      const post = newPost();
      createPost({
        variables: {
          textContent: post.textContent,
          mediaContent: post.mediaContent,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
