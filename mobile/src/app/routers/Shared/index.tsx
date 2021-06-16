import React, { memo } from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

// types
import { SharedStackParamList } from 'app/types/routes';

// constants
import { SETTINGS_STACK_NAME } from 'app/constants/routes';
import { CHAT_STACK_NAME } from 'app/constants/routes';

// routers
import SettingsRouter from '@/settings/routers/Main';
import ChatRouter from 'chat/chatList/routers/Chat';
import { useClearSelected } from '@/chat/chatList/hooks/useClearSelected';

const SharedStack = createStackNavigator<SharedStackParamList>();

const SharedRouter = () => {
  const chatBackButton = useClearSelected();
  const headerLeft = () => <HeaderBackButton onPress={chatBackButton} />;
  return (
    <SharedStack.Navigator>
      <SharedStack.Screen
        name={SETTINGS_STACK_NAME}
        component={SettingsRouter}
      />
      <SharedStack.Screen
        name={CHAT_STACK_NAME}
        component={ChatRouter}
        options={{ headerLeft: headerLeft }}
      />
    </SharedStack.Navigator>
  );
};

export default memo(SharedRouter);
