import { useDeleteCommentByIdMutation } from '@/common/types/gql.generated';
import ACTIONS from 'feed/constants/actions';

export const useHandleChatActions = () => {
  const [deleteComment] = useDeleteCommentByIdMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getComments() {
            try {
              cache.gc();
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });
  return (action: string, id: string) => {
    switch (action) {
      case ACTIONS.DELETE: {
        deleteComment({ variables: { id } });
      }
    }
  };
};
