import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/core';
import {
  AUTH_STACK_NAME,
  SPLASH_SCREEN_NAME,
  MAIN_STACK_NAME,
  SHARED_STACK_NAME,
  BOTTOM_TAB_NAME,
  FEED_STACK_NAME,
  CHAT_LIST_STACK_NAME,
  SETTINGS_STACK_NAME,
  CHAT_STACK_NAME,
  PROFILE_STACK_NAME,
} from 'app/constants/routes';

import { RootStackParamList as FeedStackParamList } from 'feed/types/routes';
import { AuthStackParamList } from 'auth/types/routes';
import { ChatListStackParamList } from 'chat/chatList/types/routes';

export type RootStackParamList = {
  [SPLASH_SCREEN_NAME]: undefined;
  [AUTH_STACK_NAME]: NavigatorScreenParams<AuthStackParamList>;
  [MAIN_STACK_NAME]: NavigatorScreenParams<MainStackParamList>;
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof SPLASH_SCREEN_NAME
>;

export type MainStackParamList = {
  [SHARED_STACK_NAME]: NavigatorScreenParams<SharedStackParamList>;
  [BOTTOM_TAB_NAME]: NavigatorScreenParams<BottomTabParamList>;
};

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof MAIN_STACK_NAME
>;

export type AuthScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof AUTH_STACK_NAME
>;

export type SharedStackParamList = {
  [CHAT_STACK_NAME]: NavigatorScreenParams<ChatListStackParamList>;
  [SETTINGS_STACK_NAME]: undefined;
};

export type SharedStackNavigationProp = StackNavigationProp<
  MainStackParamList,
  typeof SHARED_STACK_NAME
>;

export type ChatRouteProp = RouteProp<
  SharedStackParamList,
  typeof CHAT_STACK_NAME
>;

export type BottomTabParamList = {
  [FEED_STACK_NAME]: NavigatorScreenParams<FeedStackParamList>;
  [CHAT_LIST_STACK_NAME]: undefined;
  [PROFILE_STACK_NAME]: undefined;
};
