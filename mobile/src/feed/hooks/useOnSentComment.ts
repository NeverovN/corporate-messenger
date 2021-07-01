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
  const [createComment] = useCreateCommentMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getComments() {
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
  const { params } = useRoute<PostScreenRouteProp>();
  return () => {
    if (comment === '') {
      return;
    }

    createComment({ variables: { id: params.postId, content: comment } });
    setComment('');
  };
};
