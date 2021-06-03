// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import FeedTabRouter from '../TopTab';

// constants
import { FEED_SCREEN_NAME } from '@/feed/constants/routes';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { RootStackParamList } from 'feed/types/routes';

interface IFeedRouterProps {}

const Screens = createStackNavigator<RootStackParamList>();

const FeedRouter: FC<IFeedRouterProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={FEED_SCREEN_NAME}
      screenOptions={{ headerLeft: () => null }}>
      <Screens.Screen name={FEED_SCREEN_NAME} component={FeedTabRouter} />
    </Screens.Navigator>
  );
};

export default memo(FeedRouter);
