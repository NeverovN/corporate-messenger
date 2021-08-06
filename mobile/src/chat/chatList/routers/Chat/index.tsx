import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import {
  CHAT_PREFERENCES_SCREEN,
  CHAT_SCREEN_NAME,
  NEW_CHAT_SCREEN,
  NEW_CHAT_SETUP_SCREEN,
} from '../../constants/routes';
import COLORS from 'common/constants/colors';

// containers
import ChatScreen from 'chat/chatScreen/containers/ChatScreen';
import NewChatScreen from 'chat/chatList/containers/NewChatScreen';
import ChatPreferencesScreen from '@/chat/chatScreen/containers/ChatPreferencesScreen';

// types
import { ChatListStackParamList } from 'chat/chatList/types/routes';

import HeaderBackButtonWithoutText from '@/common/components/HeaderBackButtonWithoutText';
import NewChatSetup from '../../containers/NewChatSetup';

interface IAppScreenProps {}

const Screens = createStackNavigator<ChatListStackParamList>();

const ChatNavigator: FC<IAppScreenProps> = () => {
  return (
    <Screens.Navigator initialRouteName={CHAT_SCREEN_NAME}>
      <Screens.Screen
        name={CHAT_SCREEN_NAME}
        component={ChatScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Screens.Screen
        name={CHAT_PREFERENCES_SCREEN}
        component={ChatPreferencesScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'CHAT PREFERENCES',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
      <Screens.Screen
        name={NEW_CHAT_SCREEN}
        component={NewChatScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'NEW CHAT',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
      <Screens.Screen
        name={NEW_CHAT_SETUP_SCREEN}
        component={NewChatSetup}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'CHAT SETUP',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(ChatNavigator);
