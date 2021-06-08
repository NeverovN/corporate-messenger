import {
  useCreatePostMutation,
  GetPostsDocument,
  GetPostsQuery,
  CreatePostDocument,
} from 'common/types/gql.generated';

export const useAddPost = () => {
  const [createPost] = useCreatePostMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getPosts(exPosts) {
            const newPost = cache.writeQuery({
              query: GetPostsDocument,
              data: data.createPost,
            });

            return [...exPosts, newPost];
          },
        },
      });
      const query = cache.readQuery<GetPostsQuery>({ query: GetPostsDocument });
      console.log(query?.getPosts?.length);
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
