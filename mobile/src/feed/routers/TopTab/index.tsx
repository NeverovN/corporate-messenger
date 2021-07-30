import React, { memo, FC } from 'react';

// constants
import {
  ALL_FEED_SCREEN_NAME,
  FRIEND_FEED_SCREEN_NAME,
} from '@/feed/constants/routes';
import COLORS from 'common/constants/colors';

// containers
import Feed from '@/feed/containers/Feed';
import FriendFeed from '@/feed/containers/FriendFeed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// tab text
import TabText from 'common/components/BottomTabText';

import { TopTabsParamList } from 'feed/types/routes';
interface IFeedTabNavigatorProps {}

const Screens = createMaterialTopTabNavigator<TopTabsParamList>();

const FeedTabNavigator: FC<IFeedTabNavigatorProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={ALL_FEED_SCREEN_NAME}
      tabBarOptions={{
        activeTintColor: COLORS.secondary,
        inactiveTintColor: COLORS.secondaryInactive,
        indicatorStyle: { backgroundColor: COLORS.secondary },
        labelStyle: { fontFamily: 'DroidSans-Bold', fontSize: 12 },
        style: { backgroundColor: COLORS.primary },
        showLabel: false,
        showIcon: true,
        iconStyle: {
          minWidth: 300,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Screens.Screen
        name={ALL_FEED_SCREEN_NAME}
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => <TabText text="ALL" focused={focused} />,
        }}
      />
      <Screens.Screen
        name={FRIEND_FEED_SCREEN_NAME}
        component={FriendFeed}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabText text="FRIENDS" focused={focused} />
          ),
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(FeedTabNavigator);
