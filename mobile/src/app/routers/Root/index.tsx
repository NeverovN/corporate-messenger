import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { RootStackParamList } from '../../types/routes';

// constants
import {
  AUTH_STACK_NAME,
  SPLASH_SCREEN_NAME,
  MAIN_STACK_NAME,
  SHARED_STACK_NAME,
} from '../../constants/routes';

// screens
import SplashScreen from '../../containers/Splash';

// routers
import SharedRouter from '@/app/routers/Shared';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackRouter = () => {
  return (
    <RootStack.Navigator initialRouteName={SPLASH_SCREEN_NAME}>
      <RootStack.Screen name={SPLASH_SCREEN_NAME} component={SplashScreen} />
      <RootStack.Screen name={AUTH_STACK_NAME} component={() => null} />
      <RootStack.Screen name={MAIN_STACK_NAME} component={() => null} />
      <RootStack.Screen name={SHARED_STACK_NAME} component={SharedRouter} />
    </RootStack.Navigator>
  );
};

export default memo(RootStackRouter);
