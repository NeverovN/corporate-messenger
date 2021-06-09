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
              console.log(err);
              throw Error('post creation error');
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
