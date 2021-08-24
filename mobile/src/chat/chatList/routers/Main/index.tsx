import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import { CHAT_LIST_SCREEN_NAME } from '../../constants/routes';

// containers
import ChatList from 'chat/chatList/containers/Chat';

// types
import { RootStackParamList } from '@/chat/chatList/types/routes';

const Screens = createStackNavigator<RootStackParamList>();

interface IAppScreenProps {}

const ChatListNavigator: FC<IAppScreenProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={CHAT_LIST_SCREEN_NAME}
      screenOptions={{ headerShown: false }}>
      <Screens.Screen name={CHAT_LIST_SCREEN_NAME} component={ChatList} />
    </Screens.Navigator>
  );
};

export default memo(ChatListNavigator);
