// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import Screens from '../index';

// constants
import { PROFILE_SCREEN_NAME } from '../../constants/routes';

// components
import Profile from '../../containers/Profile';

interface ISettingsNavigatorProps {}

const ProfileNavigator: FC<ISettingsNavigatorProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={PROFILE_SCREEN_NAME}
      screenOptions={{ headerLeft: () => null }}>
      <Screens.Screen name={PROFILE_SCREEN_NAME} component={Profile} />
    </Screens.Navigator>
  );
};

export default memo(ProfileNavigator);
