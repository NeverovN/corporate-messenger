import { useNavigation } from '@react-navigation/native';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

// routes
import { NEW_CHAT_SCREEN } from 'chat/chatList/constants/routes';
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';

export const useHandleNewPlusPressed = () => {
  const navigation = useNavigation<SharedStackNavigationProp>();

  return () => {
    navigation.navigate(SHARED_STACK_NAME, {
      screen: CHAT_STACK_NAME,
      params: { screen: NEW_CHAT_SCREEN },
    });
  };
};
