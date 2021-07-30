// Auth router (authentication level router)

import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// container
import LoginScreen from 'auth/containers/Login';
import RegisterScreen from 'auth/containers/Registration';
import UserData from 'auth/containers/UserData';

// constants
import {
  LOGIN_SCREEN_NAME,
  REGISTER_SCREEN_NAME,
  USER_DATA_SCREEN_NAME,
} from 'auth/constants/routes';
import COLORS from 'common/constants/colors';

// types
import { AuthStackParamList } from 'auth/types/routes';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthRouter = () => {
  return (
    <AuthStack.Navigator initialRouteName={LOGIN_SCREEN_NAME}>
      <AuthStack.Screen
        name={LOGIN_SCREEN_NAME}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={REGISTER_SCREEN_NAME}
        component={RegisterScreen}
        // options={{ headerShown: false }}
        options={{ headerStyle: { backgroundColor: COLORS.primary } }}
      />
      <AuthStack.Screen
        name={USER_DATA_SCREEN_NAME}
        component={UserData}
        options={{ headerStyle: { backgroundColor: COLORS.primary } }}
      />
    </AuthStack.Navigator>
  );
};

export default memo(AuthRouter);
