// Auth router (authentication level router)

import React, { memo, FC } from 'react';

// constants
import {
  ALL_FEED_SCREEN_NAME,
  FRIEND_FEED_SCREEN_NAME,
} from '@/feed/constants/routes';

// containers
import Feed from '@/feed/containers/Feed';
import FriendFeed from '@/feed/containers/FriendFeed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TopTabsParamList } from 'feed/types/routes';
interface IFeedTabNavigatorProps {}

const Screens = createMaterialTopTabNavigator<TopTabsParamList>();

const FeedTabNavigator: FC<IFeedTabNavigatorProps> = () => {
  return (
    <Screens.Navigator initialRouteName={ALL_FEED_SCREEN_NAME}>
      <Screens.Screen name={ALL_FEED_SCREEN_NAME} component={Feed} />
      <Screens.Screen name={FRIEND_FEED_SCREEN_NAME} component={FriendFeed} />
    </Screens.Navigator>
  );
};

export default memo(FeedTabNavigator);
