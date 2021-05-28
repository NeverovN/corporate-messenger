import { useCreatePostMutation } from 'common/types/gql.generated';

// cache
import { tokenVar } from 'common/cache/cache';

interface IUseAddPost {}

export const useAddPost = () => {
  const [createPost] = useCreatePostMutation();

  return async () => {
    await createPost({ variables: { token: tokenVar() } });
  };
};
