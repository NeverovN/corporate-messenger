import { useCreatePostMutation } from 'common/types/gql.generated';
import { useNewPostSubscription } from 'common/types/gql.generated';

interface IUseAddPost {}

export const useAddPost = () => {
  const result = useNewPostSubscription(); // check if work [don't ;)]

  const [createPost] = useCreatePostMutation();

  console.log('result of subscription: ', result);

  return async () => {
    try {
      createPost();
      if (result.loading) {
        return () => {
          console.log('loading');
        };
      }
    } catch (err) {
      console.log(err);
      return () => console.log(err);
    }
  };
};
