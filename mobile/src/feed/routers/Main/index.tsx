// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import FeedTabNavigator from '../TopTab';
import Screens from '../index';

// constants
import { FEED_SCREEN_NAME } from '../../constants/routes';

// containers
import Feed from '../../containers/Feed';
import FriendFeed from '../../containers/FriendFeed';

interface IFeedNavigatorProps {}

const FeedNavigator: FC<IFeedNavigatorProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={FEED_SCREEN_NAME}
      screenOptions={{ headerLeft: () => null }}>
      <Screens.Screen name={FEED_SCREEN_NAME} component={FeedTabNavigator} />
    </Screens.Navigator>
  );
};

export default memo(FeedNavigator);
