import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import {
  CHAT_SCREEN_NAME,
  NEW_CHAT_SCREEN,
  SEARCH_CHAT_SCREEN,
} from '../../constants/routes';

// containers
import ChatScreen from 'chat/chatScreen/containers/ChatScreen';
import NewChatScreen from 'chat/chatList/containers/NewChatScreen';
import ChatSearchScreen from '../../containers/ChatSearchScreen';

// types
import { ChatListStackParamList } from 'chat/chatList/types/routes';
interface IAppScreenProps {}

const Screens = createStackNavigator<ChatListStackParamList>();

const ChatNavigator: FC<IAppScreenProps> = () => {
  return (
    <Screens.Navigator initialRouteName={CHAT_SCREEN_NAME}>
      <Screens.Screen
        name={CHAT_SCREEN_NAME}
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Screens.Screen
        name={NEW_CHAT_SCREEN}
        component={NewChatScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screens.Screen
        name={SEARCH_CHAT_SCREEN}
        component={ChatSearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(ChatNavigator);
