// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import { SETTINGS_STACK_NAME } from '@/settings/constants/routes';

// containers
import Settings from '@/settings/containers/Settings';

// types
import { SettingsStackParamList } from '@/settings/types';

interface ISettingsNavigatorProps {}

const Screens = createStackNavigator<SettingsStackParamList>();

const SettingsNavigator: FC<ISettingsNavigatorProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={SETTINGS_STACK_NAME}
      screenOptions={{ headerShown: false }}>
      <Screens.Screen name={SETTINGS_STACK_NAME} component={Settings} />
    </Screens.Navigator>
  );
};

export default memo(SettingsNavigator);
