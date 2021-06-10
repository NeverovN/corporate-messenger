import { useNavigation } from '@react-navigation/core';

// types
import { SharedStackNavigationProp } from '@/app/types/routes';

// routers
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';
import { CHAT_SCREEN_NAME } from 'chat/chatList/constants/routes';

export const useOnChatPressed = (chatId: string) => {
  const navigation = useNavigation<SharedStackNavigationProp>();

  return () => {
    navigation.navigate(SHARED_STACK_NAME, {
      screen: CHAT_STACK_NAME,
      params: { screen: CHAT_SCREEN_NAME, params: { chatId } },
    });
  };
};
