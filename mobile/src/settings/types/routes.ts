import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';

import {
  SETTINGS_STACK_NAME,
  ACCOUNT_STACK_NAME,
  ACCOUNT_SCREEN_NAME,
  EDIT_EMAIL_SCREEN_NAME,
  EDIT_PASSWORD_SCREEN_NAME,
  EDIT_USERNAME_SCREEN_NAME,
} from '@/settings/constants/routes';

export type SettingsStackParamList = {
  [SETTINGS_STACK_NAME]: undefined;
  [ACCOUNT_STACK_NAME]: undefined;
};

export type AccountSettingsParamList = {
  [ACCOUNT_SCREEN_NAME]: undefined;
  [EDIT_EMAIL_SCREEN_NAME]: { oldEmail: string };
  [EDIT_PASSWORD_SCREEN_NAME]: { old: string; new: string; newRep: string };
  [EDIT_USERNAME_SCREEN_NAME]: undefined;
};

export type SettingsScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList,
  typeof SETTINGS_STACK_NAME
>;

export type AccountSettingsScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList,
  typeof ACCOUNT_STACK_NAME
>;

export type EditEmailNavigationProp = StackNavigationProp<
  AccountSettingsParamList,
  typeof EDIT_EMAIL_SCREEN_NAME
>;

export type EditPasswordNavigationProp = StackNavigationProp<
  AccountSettingsParamList,
  typeof EDIT_PASSWORD_SCREEN_NAME
>;

export type EditUsernameNavigationProp = StackNavigationProp<
  AccountSettingsParamList,
  typeof EDIT_USERNAME_SCREEN_NAME
>;

export type EditEmailRouteProp = RouteProp<
  AccountSettingsParamList,
  typeof EDIT_EMAIL_SCREEN_NAME
>;

export type EditPasswordRouteProp = RouteProp<
  AccountSettingsParamList,
  typeof EDIT_PASSWORD_SCREEN_NAME
>;

export type EditUsernameRouteProp = RouteProp<
  AccountSettingsParamList,
  typeof EDIT_USERNAME_SCREEN_NAME
>;
