import {
  CHAT_PREFERENCES_SCREEN,
  CHAT_SCREEN_NAME,
  NEW_CHAT_SCREEN,
  NEW_CHAT_SETUP_SCREEN,
} from 'chat/chatList/constants/routes';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { CHAT_LIST_SCREEN_NAME } from '../constants/routes';

export type RootStackParamList = {
  [CHAT_LIST_SCREEN_NAME]: undefined;
};

export type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof CHAT_LIST_SCREEN_NAME
>;

export type ChatListStackParamList = {
  [CHAT_SCREEN_NAME]: { chatId: string };
  [CHAT_PREFERENCES_SCREEN]: { chatId: string };
  [NEW_CHAT_SCREEN]: undefined;
  [NEW_CHAT_SETUP_SCREEN]: undefined;
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

export type NewChatSetupStackNavigationProp = StackNavigationProp<
  ChatListStackParamList,
  typeof NEW_CHAT_SETUP_SCREEN
>;

export type ChatPrefNavigationProp = StackNavigationProp<
  ChatListStackParamList,
  typeof CHAT_PREFERENCES_SCREEN
>;
