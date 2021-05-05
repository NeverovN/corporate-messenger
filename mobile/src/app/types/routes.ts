import { StackNavigationProp } from '@react-navigation/stack';
import {
  AUTH_STACK_NAME,
  SPLASH_SCREEN_NAME,
  MAIN_STACK_NAME,
  FEED_STACK_NAME,
  CHAT_STACK_NAME,
  PROFILE_STACK_NAME,
  SHARED_STACK_NAME,
} from '../constants/routes';

import { SETTINGS_STACK_NAME } from '@/settings/constants/routes';

export type RootStackParamList = {
  [SPLASH_SCREEN_NAME]: undefined;
  [AUTH_STACK_NAME]: undefined;
  [MAIN_STACK_NAME]: undefined;
  [SHARED_STACK_NAME]: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof SPLASH_SCREEN_NAME
>;

export type MainStackParamList = {
  [FEED_STACK_NAME]: undefined;
  [CHAT_STACK_NAME]: undefined;
  [PROFILE_STACK_NAME]: undefined;
};

export type SharedStackParamList = {
  [SETTINGS_STACK_NAME]: undefined;
};
