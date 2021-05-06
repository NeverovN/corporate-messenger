import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { MainStackParamList } from 'app/types/routes';

// constants
import {
  FEED_STACK_NAME,
  CHAT_STACK_NAME,
  PROFILE_STACK_NAME,
  BOTTOM_TAB_NAME,
  SHARED_STACK_NAME,
} from '@/app/constants/routes';

// routers
import SharedRouter from '../Shared';
import BottomTab from '../BottomTab';

const MainStack = createStackNavigator<MainStackParamList>();

const MainRouter = () => {
  return (
    <MainStack.Navigator
      initialRouteName={BOTTOM_TAB_NAME}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name={BOTTOM_TAB_NAME} component={BottomTab} />
      <MainStack.Screen name={SHARED_STACK_NAME} component={SharedRouter} />
    </MainStack.Navigator>
  );
};

export default memo(MainRouter);
