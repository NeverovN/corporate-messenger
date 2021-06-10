import { useNavigation } from '@react-navigation/native';

// types
import { ProfileScreenNavigationProp } from 'profile/types/routes';

// consts
import { USER_SEARCH_SCREEN_NAME } from 'profile/constants/routes';

export const useSearchNavigation = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return () => {
    navigation.navigate(USER_SEARCH_SCREEN_NAME);
  };
};
