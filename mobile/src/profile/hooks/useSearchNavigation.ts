import { useNavigation } from '@react-navigation/native';

// types
import { SearchScreenNavigationProp } from 'profile/types/routes';

// consts
import { USER_SEARCH_SCREEN_NAME } from 'profile/constants/routes';

export const useSearchNavigation = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  return () => {
    navigation.navigate(USER_SEARCH_SCREEN_NAME);
  };
};
