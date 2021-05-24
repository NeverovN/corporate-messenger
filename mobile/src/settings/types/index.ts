import { StackNavigationProp } from '@react-navigation/stack';

import { SETTINGS_STACK_NAME } from '@/settings/constants/routes';

export type SettingsStackParamList = {
  [SETTINGS_STACK_NAME]: undefined;
};

export type SettingsScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList,
  typeof SETTINGS_STACK_NAME
>;
