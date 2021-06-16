import { selectedFriendsVar } from '@/common/cache/cache';
import { useNavigation } from '@react-navigation/native';

export const useClearSelected = () => {
  const navigation = useNavigation();

  return () => {
    navigation.goBack();
    selectedFriendsVar([]);
  };
};
