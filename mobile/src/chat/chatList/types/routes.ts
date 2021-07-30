import {
  CHAT_PREFERENCES_SCREEN,
  CHAT_SCREEN_NAME,
  NEW_CHAT_SCREEN,
  SEARCH_CHAT_SCREEN,
} from 'chat/chatList/constants/routes';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export type ChatListStackParamList = {
  [CHAT_SCREEN_NAME]: { chatId: string };
  [CHAT_PREFERENCES_SCREEN]: { chatId: string };
  [NEW_CHAT_SCREEN]: undefined;
  [SEARCH_CHAT_SCREEN]: undefined;
};

export type ChatRouteProp = RouteProp<
  ChatListStackParamList,
  typeof CHAT_SCREEN_NAME
>;

export type ChatPrefRouteProp = RouteProp<
  ChatListStackParamList,
  typeof CHAT_PREFERENCES_SCREEN
>;

export type NewChatStackNavigationProp = StackNavigationProp<
  ChatListStackParamList,
  typeof NEW_CHAT_SCREEN
>;

export type ChatPrefNavigationProp = StackNavigationProp<
  ChatListStackParamList,
  typeof CHAT_PREFERENCES_SCREEN
>;

export type SearchChatStackNavigationProp = StackNavigationProp<
  ChatListStackParamList,
  typeof SEARCH_CHAT_SCREEN
>;
