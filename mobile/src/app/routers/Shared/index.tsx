import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { SharedStackParamList } from 'app/types/routes';

// constants
import { SETTINGS_STACK_NAME } from 'app/constants/routes';
import { CHAT_STACK_NAME } from 'app/constants/routes';

// routers
import SettingsRouter from '@/settings/routers/Main';
import ChatRouter from 'chat/chatList/routers/Chat';

const SharedStack = createStackNavigator<SharedStackParamList>();

const SharedRouter = () => {
  return (
    <SharedStack.Navigator screenOptions={{ headerShown: false }}>
      <SharedStack.Screen
        name={SETTINGS_STACK_NAME}
        component={SettingsRouter}
      />
      <SharedStack.Screen name={CHAT_STACK_NAME} component={ChatRouter} />
    </SharedStack.Navigator>
  );
};

export default memo(SharedRouter);
