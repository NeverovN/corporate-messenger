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
import COLORS from 'common/constants/colors';

// containers
import ChatScreen from 'chat/chatScreen/containers/ChatScreen';
import NewChatScreen from 'chat/chatList/containers/NewChatScreen';
import ChatSearchScreen from '../../containers/ChatSearchScreen';

// types
import { ChatListStackParamList } from 'chat/chatList/types/routes';

// hooks
import { useNewChatBack } from 'chat/chatList/hooks/useNewChatBack';
import HeaderBackButtonWithoutText from '@/common/components/HeaderBackButtonWithoutText';

interface IAppScreenProps {}

const Screens = createStackNavigator<ChatListStackParamList>();

const ChatNavigator: FC<IAppScreenProps> = () => {
  const newChatBack = useNewChatBack();
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
          title: 'There should be a component',
          headerTitleStyle: {
            fontSize: 15,
            fontFamily: 'Mulish-Regular_Light',
          },
        }}
      />
      <Screens.Screen
        name={NEW_CHAT_SCREEN}
        component={NewChatScreen}
        options={{
          headerLeft: () => <HeaderBackButton onPress={newChatBack} />,
        }}
      />
      <Screens.Screen name={SEARCH_CHAT_SCREEN} component={ChatSearchScreen} />
    </Screens.Navigator>
  );
};

export default memo(ChatNavigator);
