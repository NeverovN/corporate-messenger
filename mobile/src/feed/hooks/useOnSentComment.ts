import {
  CommentFragmentFragmentDoc,
  useCreateCommentMutation,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { PostScreenRouteProp } from '../types/routes';

export const useOnSentComment = (
  comment: string,
  setComment: (comment: string) => void,
) => {
  const { params } = useRoute<PostScreenRouteProp>();

  const [createComment] = useCreateCommentMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getPostById() {
            try {
              cache.writeFragment({
                fragment: CommentFragmentFragmentDoc,
                data: data.createComment,
              });
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });
  return () => {
    if (comment === '') {
      return;
    }

    createComment({ variables: { postId: params.postId, content: comment } });
    setComment('');
  };
};
