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
              const newPost = cache.writeFragment({
                fragment: PostFragmentFragmentDoc,
                data: data.createPost,
              });
              return [...exPosts, newPost];
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
      createPost();
    } catch (err) {
      console.log(err);
    }
  };
};
