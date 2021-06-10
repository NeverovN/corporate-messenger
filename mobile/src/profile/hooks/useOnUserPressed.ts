import { useNavigation } from '@react-navigation/native';

// types
import { ThirdPartyUserScreenNavigationProp } from 'profile/types/routes';

// constants
import { THIRD_PARTY_USER_SCREEN_NAME } from 'profile/constants/routes';

export const useOnUserPressed = (userId: string) => {
  const navigation = useNavigation<ThirdPartyUserScreenNavigationProp>();

  return () => navigation.navigate(THIRD_PARTY_USER_SCREEN_NAME, { userId });
};
