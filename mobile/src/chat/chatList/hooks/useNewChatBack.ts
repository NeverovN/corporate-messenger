import { selectedFriendsVar } from '@/common/cache/cache';
import { useNavigation } from '@react-navigation/core';

export const useNewChatBack = () => {
  const navigation = useNavigation();
  return () => {
    navigation.goBack();
    selectedFriendsVar([]);
  };
};
