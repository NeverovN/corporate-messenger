import { useNavigation } from '@react-navigation/native';

// types
import { ProfileScreenNavigationProp } from 'profile/types/routes';

// constants
import { THIRD_PARTY_USER_SCREEN_NAME } from 'profile/constants/routes';

export const useOnUserPressed = (userId: string) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return () => navigation.navigate(THIRD_PARTY_USER_SCREEN_NAME, { userId });
};
