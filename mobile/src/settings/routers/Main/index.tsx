// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import Screens from '../index';

// constants
import { SETTINGS_SCREEN_NAME } from '../../constants/routes';

// components
import Settings from '../../components/Settings';

interface ISettingsNavigatorProps {}

const SettingsNavigator: FC<ISettingsNavigatorProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={SETTINGS_SCREEN_NAME}
      screenOptions={{ headerLeft: () => null }}>
      <Screens.Screen name={SETTINGS_SCREEN_NAME} component={Settings} />
    </Screens.Navigator>
  );
};

export default memo(SettingsNavigator);
