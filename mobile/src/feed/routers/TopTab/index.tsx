import React, { memo, FC } from 'react';

// constants
import {
  ALL_FEED_SCREEN_NAME,
  FRIEND_FEED_SCREEN_NAME,
} from '@/feed/constants/routes';
import { useStyles } from './styles';

// containers
import Feed from '@/feed/containers/Feed';
import FriendFeed from '@/feed/containers/FriendFeed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// tab text
import TabText from 'common/components/BottomTabText';

import { TopTabsParamList } from 'feed/types/routes';
import { useTheme } from 'react-native-stylex';
interface IFeedTabNavigatorProps {}

const Screens = createMaterialTopTabNavigator<TopTabsParamList>();

const FeedTabNavigator: FC<IFeedTabNavigatorProps> = () => {
  const { palette } = useTheme();
  const styles = useStyles();
  return (
    <Screens.Navigator
      initialRouteName={ALL_FEED_SCREEN_NAME}
      tabBarOptions={{
        activeTintColor: palette.secondary,
        inactiveTintColor: palette.secondaryInactive,
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
        style: styles.style,
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
