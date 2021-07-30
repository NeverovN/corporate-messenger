import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// types
import { BottomTabParamList } from 'app/types/routes';

// constants
import {
  FEED_STACK_NAME,
  CHAT_LIST_STACK_NAME,
  PROFILE_STACK_NAME,
} from '@/app/constants/routes';
import COLORS from 'common/constants/colors';

// routers
import FeedRouter from 'feed/routers/Main';
import ChatRouter from 'chat/chatList/routers/Main';
import ProfileRouter from 'profile/routers/Main';

// label
import TabText from 'common/components/BottomTabText';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AppRouter = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={FEED_STACK_NAME}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: COLORS.primary,
          marginBottom: -useSafeAreaInsets().bottom,
        },
        activeTintColor: COLORS.secondary,
        inactiveTintColor: COLORS.secondaryInactive,
        showLabel: false,
      }}>
      <BottomTab.Screen
        name={FEED_STACK_NAME}
        component={FeedRouter}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabText text={'FEED'} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={CHAT_LIST_STACK_NAME}
        component={ChatRouter}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabText text={'CHATS'} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={PROFILE_STACK_NAME}
        component={ProfileRouter}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabText text={'PROFILE'} focused={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default memo(AppRouter);
