import { useNavigation } from '@react-navigation/native';

// consts
import { POST_STACK_NAME, POST_SCREEN_NAME } from '../constants/routes';

// types
import { PostStackNavigationProp } from 'feed/types/routes';

export const usePostRedirection = (postId: string) => {
  const navigation = useNavigation<PostStackNavigationProp>();
  return () => {
    navigation.navigate(POST_STACK_NAME, {
      screen: POST_SCREEN_NAME,
      params: { postId },
    });
  };
};
