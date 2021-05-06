// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import { InnerScreens } from '../index';

// constants
import {
  ALL_FEED_SCREEN_NAME,
  FRIEND_FEED_SCREEN_NAME,
} from 'feed/constants/routes';

// containers
import Feed from 'feed/containers/Feed';
import FriendFeed from 'feed/containers/FriendFeed';

interface IFeedTabNavigatorProps {}

const FeedTabNavigator: FC<IFeedTabNavigatorProps> = () => {
  return (
    <InnerScreens.Navigator initialRouteName={ALL_FEED_SCREEN_NAME}>
      <InnerScreens.Screen name={ALL_FEED_SCREEN_NAME} component={Feed} />
      <InnerScreens.Screen
        name={FRIEND_FEED_SCREEN_NAME}
        component={FriendFeed}
      />
    </InnerScreens.Navigator>
  );
};

export default memo(FeedTabNavigator);
