import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEditPostMutation } from '@/common/types/gql.generated';

// cache
import { editPost } from '@/common/cache/cache';

export const useEditPost = () => {
  const navigation = useNavigation();
  const [editPostMutation] = useEditPostMutation();

  return async () => {
    try {
      const newPost = {
        postId: editPost().id,
        textContent: editPost().textContent,
        mediaContent: editPost().mediaContent,
      };
      await editPostMutation({ variables: { ...newPost } });
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', `${err}`);
    }
  };
};
