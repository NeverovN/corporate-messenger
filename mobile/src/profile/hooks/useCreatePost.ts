import { useNavigation } from '@react-navigation/native';

// types
import { CreatePostScreenNavigationProp } from 'profile/types/routes';

// routers
import { CREATE_POST_SCREEN_NAME } from '../constants/routes';

export const useCreatePost = () => {
  const navigation = useNavigation<CreatePostScreenNavigationProp>();
  return () => {
    navigation.navigate(CREATE_POST_SCREEN_NAME);
  };
};
