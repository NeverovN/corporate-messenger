import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { RootStackParamList } from 'app/types/routes';

// constants
import {
  AUTH_STACK_NAME,
  SPLASH_SCREEN_NAME,
  MAIN_STACK_NAME,
} from 'app/constants/routes';

// screens
import SplashScreen from '../../containers/Splash';

// routers
import AuthRouter from '@/auth/routers/Auth';
import MainRouter from '../Main';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackRouter = () => {
  return (
    <RootStack.Navigator
      initialRouteName={SPLASH_SCREEN_NAME}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <RootStack.Screen name={SPLASH_SCREEN_NAME} component={SplashScreen} />
      <RootStack.Screen name={AUTH_STACK_NAME} component={AuthRouter} />
      <RootStack.Screen name={MAIN_STACK_NAME} component={MainRouter} />
    </RootStack.Navigator>
  );
};

export default memo(RootStackRouter);
