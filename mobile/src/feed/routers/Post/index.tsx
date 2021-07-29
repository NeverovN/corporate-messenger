import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// containers

import EditCommentScreen from '@/feed/containers/EditCommentScreen';

// constants
import {
  EDIT_COMMENT_SCREEN_NAME,
  POST_SCREEN_NAME,
} from '@/feed/constants/routes';
import COLORS from 'common/constants/colors';

// types
import { PostStackParamList } from 'feed/types/routes';
import HeaderBackButtonWithoutText from '@/common/components/HeaderBackButtonWithoutText';

interface IPostRouterProps {}

const Screens = createStackNavigator<PostStackParamList>();

const FeedRouter: FC<IPostRouterProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={POST_SCREEN_NAME}
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerLeft: () => <HeaderBackButtonWithoutText />,
      }}>
      <Screens.Screen
        name={EDIT_COMMENT_SCREEN_NAME}
        component={EditCommentScreen}
      />
    </Screens.Navigator>
  );
};

export default memo(FeedRouter);
