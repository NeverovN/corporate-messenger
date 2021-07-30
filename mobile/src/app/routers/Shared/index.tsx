import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { SharedStackParamList } from 'app/types/routes';

// constants
import { POST_SCREEN_NAME, SETTINGS_STACK_NAME } from 'app/constants/routes';
import { CHAT_STACK_NAME } from 'app/constants/routes';
import COLORS from 'common/constants/colors';

// routers
import SettingsRouter from '@/settings/routers/Main';
import ChatRouter from 'chat/chatList/routers/Chat';
import PostScreen from 'feed/containers/PostScreen';

// back button
import HeaderBackButtonWithoutText from '@/common/components/HeaderBackButtonWithoutText';

const SharedStack = createStackNavigator<SharedStackParamList>();

const SharedRouter = () => {
  return (
    <SharedStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}>
      <SharedStack.Screen
        name={SETTINGS_STACK_NAME}
        component={SettingsRouter}
        options={{
          headerShown: false,
        }}
      />
      <SharedStack.Screen
        name={CHAT_STACK_NAME}
        component={ChatRouter}
        options={{ headerShown: false }}
      />
      <SharedStack.Screen
        name={POST_SCREEN_NAME}
        component={PostScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Mulish-Regular_Light',
          },
          title: 'POST',
        }}
      />
    </SharedStack.Navigator>
  );
};

export default memo(SharedRouter);
