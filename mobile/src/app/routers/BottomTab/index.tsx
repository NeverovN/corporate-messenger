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
  STORYBOOK_SCREEN_NAME,
} from '@/app/constants/routes';
import { useStyles } from './styles';

// routers
import FeedRouter from 'feed/routers/Main';
import ChatRouter from 'chat/chatList/routers/Main';
import ProfileRouter from 'profile/routers/Main';

// storybook
import Storybook from '../../../../storybook/index';

// label
import TabText from 'common/components/BottomTabText';
import { useTheme } from 'react-native-stylex';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AppRouter = () => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName={CHAT_LIST_STACK_NAME}
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        activeTintColor: palette.secondary,
        inactiveTintColor: palette.secondaryInactive,
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
        name={STORYBOOK_SCREEN_NAME}
        component={Storybook}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabText text={'STORYBOOK'} focused={focused} />
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
