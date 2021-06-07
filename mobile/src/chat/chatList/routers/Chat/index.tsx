import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import { CHAT_SCREEN_NAME } from '../../constants/routes';

// containers
import ChatScreen from 'chat/chatScreen/containers/ChatScreen';

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
    </Screens.Navigator>
  );
};

export default memo(ChatNavigator);
