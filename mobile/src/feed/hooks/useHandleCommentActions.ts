import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDeleteCommentByIdMutation } from '@/common/types/gql.generated';

// consts
import ACTIONS from 'feed/constants/actions';

// types
import { PostScreenNavigationProp } from 'feed/types/routes';
import { EDIT_COMMENT_SCREEN_NAME } from '../constants/routes';
import { editComment } from '@/common/cache/cache';
import { ICommentItem } from '../types/comment';

export const useHandleCommentActions = () => {
  const navigation = useNavigation<PostScreenNavigationProp>();
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

  return async (action: string, comment: ICommentItem) => {
    switch (action) {
      case ACTIONS.DELETE_COMMENT: {
        try {
          await deleteComment({ variables: { id: comment.id } });
        } catch (error) {
          Alert.alert('Error', `${error}`);
        }
        break;
      }
      case ACTIONS.EDIT_COMMENT: {
        editComment(comment);
        // seems that navigation params are not necessary
        navigation.navigate(EDIT_COMMENT_SCREEN_NAME);
      }
    }
  };
};
