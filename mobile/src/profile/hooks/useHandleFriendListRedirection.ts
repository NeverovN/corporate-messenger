import { useNavigation } from '@react-navigation/native';

//types
import { FriendsScreenNavigationProp } from '../types/routes';

// routers
import { FRIENDS_LIST_SCREEN } from 'profile/constants/routes';

export const useHandleFriendListRedirection = () => {
  const navigation = useNavigation<FriendsScreenNavigationProp>();
  return () => {
    navigation.navigate(FRIENDS_LIST_SCREEN);
  };
};
