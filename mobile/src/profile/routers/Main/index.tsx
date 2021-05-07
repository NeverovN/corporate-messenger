// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import Screens from '../index';
import Icon from 'react-native-vector-icons/FontAwesome';

// constants
import { PROFILE_SCREEN_NAME } from '@/profile/constants/routes';

// components
import Profile from '@/profile/containers/Profile';

interface IProfileRouterProps {}

const ProfileRouter: FC<IProfileRouterProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={PROFILE_SCREEN_NAME}
      screenOptions={{ headerLeft: () => null }}>
      <Screens.Screen
        name={PROFILE_SCREEN_NAME}
        component={Profile}
        options={{
          headerRight: () => <Icon name="cog" size={25} />, // perhaps it should be mooved in its own file
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(ProfileRouter);
