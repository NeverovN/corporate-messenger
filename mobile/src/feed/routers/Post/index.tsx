import React, { memo, FC } from 'react';

// containers
import PostScreen from '@/feed/containers/PostScreen';
import EditCommentScreen from '@/feed/containers/EditCommentScreen';

// constants
import {
  EDIT_COMMENT_SCREEN_NAME,
  POST_SCREEN_NAME,
} from '@/feed/constants/routes';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { PostStackParamList } from 'feed/types/routes';

interface IPostRouterProps {}

const Screens = createStackNavigator<PostStackParamList>();

const FeedRouter: FC<IPostRouterProps> = () => {
  return (
    <Screens.Navigator initialRouteName={POST_SCREEN_NAME}>
      <Screens.Screen name={POST_SCREEN_NAME} component={PostScreen} />
      <Screens.Screen
        name={EDIT_COMMENT_SCREEN_NAME}
        component={EditCommentScreen}
      />
    </Screens.Navigator>
  );
};

export default memo(FeedRouter);
