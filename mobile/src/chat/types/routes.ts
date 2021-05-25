import { StackNavigationProp } from '@react-navigation/stack';
import { CHAT_SCREEN_NAME } from 'chat/constants/routes';

export type ChatListStackParamList = {
  [CHAT_SCREEN_NAME]: undefined;
};

export type ChatScreenNavigationProp = StackNavigationProp<
  ChatListStackParamList,
  typeof CHAT_SCREEN_NAME
>;
