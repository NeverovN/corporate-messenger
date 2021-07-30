import {
  ChatPrefNavigationProp,
  ChatRouteProp,
} from '@/chat/chatList/types/routes';
import { useNavigation, useRoute } from '@react-navigation/native';

// routes
import { CHAT_PREFERENCES_SCREEN } from 'chat/chatList/constants/routes';

export const useChatPreferencesRedirection = () => {
  const navigation = useNavigation<ChatPrefNavigationProp>();
  const { params } = useRoute<ChatRouteProp>();

  return () => {
    navigation.navigate(CHAT_PREFERENCES_SCREEN, { chatId: params.chatId });
  };
};
