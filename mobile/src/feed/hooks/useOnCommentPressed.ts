import { useNavigation } from '@react-navigation/native';

// consts
import { POST_SCREEN_NAME } from '../constants/routes';

// types
import { PostStackNavigationProp } from 'feed/types/routes';

export const useOnCommentPressed = (postId: string) => {
  const navigation = useNavigation<PostStackNavigationProp>();
  return () => {
    navigation.navigate(POST_SCREEN_NAME, { postId });
  };
};
