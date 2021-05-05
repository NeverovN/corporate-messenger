import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { MainStackParamList } from '@/app/types/routes';

// constants
import {
  FEED_STACK_NAME,
  CHAT_STACK_NAME,
  PROFILE_STACK_NAME,
} from '@/app/constants/routes';

const MainStack = createStackNavigator<MainStackParamList>();

const MainRouter = () => {
  return (
    <MainStack.Navigator initialRouteName={FEED_STACK_NAME}>
      <MainStack.Screen name={FEED_STACK_NAME} component={() => null} />
      <MainStack.Screen name={CHAT_STACK_NAME} component={() => null} />
      <MainStack.Screen name={PROFILE_STACK_NAME} component={() => null} />
    </MainStack.Navigator>
  );
};

export default memo(MainRouter);
