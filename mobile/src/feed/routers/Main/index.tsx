import React, { memo, FC } from 'react';

// components
import FeedTabRouter from '../TopTab';
import PostScreen from '@/feed/containers/PostScreen';

// constants
import { FEED_SCREEN_NAME, POST_SCREEN_NAME } from '@/feed/constants/routes';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { RootStackParamList } from 'feed/types/routes';

interface IFeedRouterProps {}

const Screens = createStackNavigator<RootStackParamList>();

const FeedRouter: FC<IFeedRouterProps> = () => {
  return (
    <Screens.Navigator initialRouteName={FEED_SCREEN_NAME}>
      <Screens.Screen name={FEED_SCREEN_NAME} component={FeedTabRouter} />
      <Screens.Screen name={POST_SCREEN_NAME} component={PostScreen} />
    </Screens.Navigator>
  );
};

export default memo(FeedRouter);
