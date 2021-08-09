import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import {
  CHAT_PREFERENCES_SCREEN,
  CHAT_SCREEN_NAME,
  NEW_CHAT_SCREEN,
  NEW_CHAT_SETUP_SCREEN,
} from '../../constants/routes';
import { useStyles } from './styles';

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
  const styles = useStyles();
  return (
    <Screens.Navigator initialRouteName={CHAT_SCREEN_NAME}>
      <Screens.Screen
        name={CHAT_SCREEN_NAME}
        component={ChatScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: styles.headerStyle,
        }}
      />
      <Screens.Screen
        name={CHAT_PREFERENCES_SCREEN}
        component={ChatPreferencesScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          title: 'CHAT PREFERENCES',
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Screens.Screen
        name={NEW_CHAT_SCREEN}
        component={NewChatScreen}
        options={{
          headerStyle: styles.headerStyle,
          title: 'NEW CHAT',
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Screens.Screen
        name={NEW_CHAT_SETUP_SCREEN}
        component={NewChatSetup}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: styles.headerStyle,
          title: 'CHAT SETUP',
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(ChatNavigator);
