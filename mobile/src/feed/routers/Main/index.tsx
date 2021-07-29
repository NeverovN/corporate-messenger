import React, { memo, FC } from 'react';

// components
import FeedTabRouter from '../TopTab';

// containers
import EditPostScreen from '@/feed/containers/EditPostScreen';

// routers
import PostStack from '../Post';

// constants
import {
  EDIT_POST_SCREEN_NAME,
  FEED_SCREEN_NAME,
  POST_STACK_NAME,
} from '@/feed/constants/routes';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { RootStackParamList } from 'feed/types/routes';

interface IFeedRouterProps {}

const Screens = createStackNavigator<RootStackParamList>();

const FeedRouter: FC<IFeedRouterProps> = () => {
  return (
    <Screens.Navigator initialRouteName={FEED_SCREEN_NAME}>
      <Screens.Screen
        name={FEED_SCREEN_NAME}
        component={FeedTabRouter}
        options={{ headerShown: false }}
      />
      <Screens.Screen
        name={POST_STACK_NAME}
        component={PostStack}
        options={{ headerShown: false }}
      />
      <Screens.Screen name={EDIT_POST_SCREEN_NAME} component={EditPostScreen} />
    </Screens.Navigator>
  );
};

export default memo(FeedRouter);
