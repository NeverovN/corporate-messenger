import { useNavigation } from '@react-navigation/native';

// consts
import { SHARED_STACK_NAME } from 'app/constants/routes';
import { POST_SCREEN_NAME } from '../constants/routes';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

export const usePostRedirection = (postId: string, isToComment: boolean) => {
  const navigation = useNavigation<SharedStackNavigationProp>();
  return () => {
    navigation.navigate(SHARED_STACK_NAME, {
      screen: POST_SCREEN_NAME,
      params: { postId, isToComment },
    });
  };
};
