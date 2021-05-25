// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import FeedTabRouter from '../TopTab';
import Screens from '../index';

// constants
import { FEED_SCREEN_NAME } from 'feed/constants/routes';

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
