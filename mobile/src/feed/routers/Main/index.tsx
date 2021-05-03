// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import Screens from '../index';

// constants
import { FEED_SCREEN_NAME } from '../../constants/routes';

// components
import Login from '../../containers/Login';
import RegisterView from '../../components/Register';

interface IAppScreenProps {}

const AuthScreen: FC<IAppScreenProps> = () => {
  return (
    <Screens.Navigator initialRouteName={LOGIN_SCREEN_NAME}>
      <Screens.Screen name={LOGIN_SCREEN_NAME} component={Login} />
      <Screens.Screen name={REGISTER_SCREEN_NAME} component={RegisterView} />
    </Screens.Navigator>
  );
};

export default memo(AuthScreen);
