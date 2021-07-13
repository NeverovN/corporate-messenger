import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  CommentFragmentFragmentDoc,
  useEditCommentMutation,
} from '@/common/types/gql.generated';

// cache
import { editComment } from '@/common/cache/cache';

export const useEditComment = () => {
  const navigation = useNavigation();
  const [editCommentMutation] = useEditCommentMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getPost() {
            try {
              cache.writeFragment({
                fragment: CommentFragmentFragmentDoc,
                data: data.editComment,
              });
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });

  return async () => {
    try {
      const newComment = {
        commentId: editComment().id,
        textContent: editComment().content || '',
      };
      await editCommentMutation({ variables: { ...newComment } });
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', `${err}`);
    }
  };
};
