// Auth router (authentication level router)

import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// container
import LoginScreen from 'auth/containers/Login';
import RegisterScreen from 'auth/containers/Registration';

// constants
import { LOGIN_SCREEN_NAME, REGISTER_SCREEN_NAME } from 'auth/constants/routes';

// types
import { AuthStackParamList } from 'auth/types/routes';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthRouter = () => {
  return (
    <AuthStack.Navigator initialRouteName={LOGIN_SCREEN_NAME}>
      <AuthStack.Screen
        name={LOGIN_SCREEN_NAME}
        component={LoginScreen}
        options={{ headerLeft: () => null }}
      />
      <AuthStack.Screen
        name={REGISTER_SCREEN_NAME}
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};

export default memo(AuthRouter);
