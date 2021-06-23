import React, { memo, FC } from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

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

// hooks
import { useBackButtonNavigation } from 'common/hooks/useBackButtonNavigation';
import { useNewChatBack } from 'chat/chatList/hooks/useNewChatBack';

interface IAppScreenProps {}

const Screens = createStackNavigator<ChatListStackParamList>();

const ChatNavigator: FC<IAppScreenProps> = () => {
  const chatBack = useBackButtonNavigation();
  const newChatBack = useNewChatBack();
  return (
    <Screens.Navigator initialRouteName={CHAT_SCREEN_NAME}>
      <Screens.Screen
        name={CHAT_SCREEN_NAME}
        component={ChatScreen}
        options={{ headerLeft: () => <HeaderBackButton onPress={chatBack} /> }}
      />
      <Screens.Screen
        name={NEW_CHAT_SCREEN}
        component={NewChatScreen}
        options={{
          headerLeft: () => <HeaderBackButton onPress={newChatBack} />,
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
