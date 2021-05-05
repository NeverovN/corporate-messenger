import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// types
import { BottomTabParamList } from 'app/types/routes';

// constants
import {
  FEED_STACK_NAME,
  CHAT_STACK_NAME,
  PROFILE_STACK_NAME,
} from '@/app/constants/routes';

// routers
import FeedRouter from '@/feed/routers/Main';
import ChatRouter from '@/chat/routers/Main';
import ProfileRouter from '@/profile/routers/Main';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AppRouter = () => {
  return (
    <BottomTab.Navigator initialRouteName={FEED_STACK_NAME}>
      <BottomTab.Screen name={FEED_STACK_NAME} component={FeedRouter} />
      <BottomTab.Screen name={CHAT_STACK_NAME} component={ChatRouter} />
      <BottomTab.Screen name={PROFILE_STACK_NAME} component={ProfileRouter} />
    </BottomTab.Navigator>
  );
};

export default memo(AppRouter);
