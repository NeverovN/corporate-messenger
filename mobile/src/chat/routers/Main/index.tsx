// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import Screens from '../index';

// constants
import { CHAT_LIST_SCREEN_NAME } from '../../constants/routes';

// components
import ChatList from '../../containers/ChatList';

interface IAppScreenProps {}

const ChatListNavigator: FC<IAppScreenProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={CHAT_LIST_SCREEN_NAME}
      screenOptions={{ headerLeft: () => null }}>
      <Screens.Screen name={CHAT_LIST_SCREEN_NAME} component={ChatList} />
    </Screens.Navigator>
  );
};

export default memo(ChatListNavigator);
