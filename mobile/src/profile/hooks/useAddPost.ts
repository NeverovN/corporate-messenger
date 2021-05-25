import { userData } from 'common/constants/userData';
import { useAddPostMutation } from 'common/types/gql.generated';
interface IUseAddPost {}

export const useAddPost = () => {
  const [addPost] = useAddPostMutation();
  return async () => {
    await addPost({
      variables: {
        input: {
          username: userData.username,
        },
      },
    });
    console.log('add post button pressed');
  };
};
