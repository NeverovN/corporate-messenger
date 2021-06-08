import { CHAT_SCREEN_NAME } from 'chat/chatList/constants/routes';
import { RouteProp } from '@react-navigation/core';

export type ChatListStackParamList = {
  [CHAT_SCREEN_NAME]: { chatId: string };
};

export type ChatRouteProp = RouteProp<
  ChatListStackParamList,
  typeof CHAT_SCREEN_NAME
>;
