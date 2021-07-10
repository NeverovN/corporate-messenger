import { useDeletePostByIdMutation } from '@/common/types/gql.generated';
import ACTIONS from 'feed/constants/actions';
import { Alert } from 'react-native';

export const useHandlePostActions = () => {
  const [deletePost] = useDeletePostByIdMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getAllPosts() {
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

  return async (action: string, postId: string) => {
    switch (action) {
      case ACTIONS.DELETE_POST: {
        try {
          await deletePost({ variables: { postId } });
        } catch (err) {
          Alert.alert('Error', `${err}`);
        }
        break;
      }
      case ACTIONS.EDIT_POST: {
        Alert.alert('Edit Post', 'Edit button pressed');
      }
    }
  };
};

type MessageType = {
  id: string;
  content: string;
  createdAt: string;
  author: string;
};
