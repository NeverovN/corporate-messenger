// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import Screens from '../index';

// constants
import { PROFILE_SCREEN_NAME } from '@/profile/constants/routes';

// components
import Profile from 'profile/containers/Profile';

// hocs
import HeaderRight from '@/profile/containers/HeaderRight';

interface IProfileRouterProps {}

const ProfileRouter: FC<IProfileRouterProps> = () => {
  const headerRight = () => {
    return <HeaderRight />;
  };

  return (
    <Screens.Navigator
      initialRouteName={PROFILE_SCREEN_NAME}
      screenOptions={{ headerLeft: () => null }}>
      <Screens.Screen
        name={PROFILE_SCREEN_NAME}
        component={Profile}
        options={{
          headerRight: headerRight, // perhaps it should be moved in its own file
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(ProfileRouter);
