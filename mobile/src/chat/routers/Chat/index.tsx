import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import { CHAT_SCREEN_NAME } from '../../constants/routes';

// containers
import ChatScreen from 'chat/chat/components/ChatScreen';

// types
import { ChatListStackParamList } from 'chat/types/routes';

interface IAppScreenProps {}

const Screens = createStackNavigator<ChatListStackParamList>();

const ChatListNavigator: FC<IAppScreenProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={CHAT_SCREEN_NAME}
      screenOptions={{ headerShown: false }}>
      <Screens.Screen name={CHAT_SCREEN_NAME} component={ChatScreen} />
    </Screens.Navigator>
  );
};

export default memo(ChatListNavigator);
