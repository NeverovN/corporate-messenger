import { StackNavigationProp } from '@react-navigation/stack';
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
} from 'app/constants/routes';

export type RootStackParamList = {
  [SPLASH_SCREEN_NAME]: undefined;
  [AUTH_STACK_NAME]: undefined;
  [MAIN_STACK_NAME]: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof SPLASH_SCREEN_NAME
>;

export type MainStackParamList = {
  [SHARED_STACK_NAME]: undefined;
  [BOTTOM_TAB_NAME]: undefined;
};

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof MAIN_STACK_NAME
>;

export type SharedStackParamList = {
  [CHAT_STACK_NAME]: undefined;
  [SETTINGS_STACK_NAME]: undefined;
};

export type SharedChatScreenNavigationProp = StackNavigationProp<
  SharedStackParamList,
  typeof CHAT_STACK_NAME
>;

export type BottomTabParamList = {
  [FEED_STACK_NAME]: undefined;
  [CHAT_LIST_STACK_NAME]: undefined;
  [SETTINGS_STACK_NAME]: undefined;
};

export type ChatScreenNavigationProp = StackNavigationProp<
  SharedStackParamList,
  typeof CHAT_STACK_NAME
>;
