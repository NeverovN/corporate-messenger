import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDeleteCommentByIdMutation } from '@/common/types/gql.generated';

// consts
import ACTIONS from 'feed/constants/actions';

// types
import { SharedStackNavigationProp } from 'app/types/routes';
import { SHARED_STACK_NAME, EDIT_COMMENT_SCREEN } from 'app/constants/routes';
import { editComment } from '@/common/cache/cache';
import { ICommentItem } from '../types/comment';

export const useHandleCommentActions = () => {
  const navigation = useNavigation<SharedStackNavigationProp>();
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
        navigation.navigate(SHARED_STACK_NAME, { screen: EDIT_COMMENT_SCREEN });
      }
    }
  };
};
