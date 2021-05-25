// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import FeedTabRouter from '../TopTab';
import Screens from '../index';

// constants
import { FEED_SCREEN_NAME } from '@/feed/constants/routes';

<<<<<<< HEAD
=======
// containers
// import Feed from 'feed/containers/Feed';
// import FriendFeed from 'feed/containers/FriendFeed';

>>>>>>> 1c075eb5865abc36ee28708536dbb9a04251626b
interface IFeedRouterProps {}

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
