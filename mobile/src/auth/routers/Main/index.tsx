// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import Screens from '../index';

// constants
import {
  LOGIN_SCREEN_NAME,
  REGISTER_SCREEN_NAME,
} from '../../constants/routes';

// components
import Login from '../../containers/Login';
import Register from '../../containers/Registration';

interface IAppScreenProps {}

const AuthScreen: FC<IAppScreenProps> = () => {
  return (
    <Screens.Navigator initialRouteName={LOGIN_SCREEN_NAME}>
      <Screens.Screen name={LOGIN_SCREEN_NAME} component={Login} />
      <Screens.Screen name={REGISTER_SCREEN_NAME} component={Register} />
    </Screens.Navigator>
  );
};

export default memo(AuthScreen);
