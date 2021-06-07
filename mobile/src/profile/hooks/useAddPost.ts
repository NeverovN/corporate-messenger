import { useCreatePostMutation } from 'common/types/gql.generated';

interface IUseAddPost {}

export const useAddPost = () => {
  const [createPost] = useCreatePostMutation();
  return async () => {
    try {
      createPost();
    } catch (err) {
      console.log(err);
    }
  };
};
