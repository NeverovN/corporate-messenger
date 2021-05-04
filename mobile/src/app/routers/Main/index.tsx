// app level navigation (highest router)
import React, { FC, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routers
import AuthNavigator from '../../../auth/routers/Main/index';
import FeedNavigator from '../../../feed/routers/Main/index';
import ChatListNavigator from '../../../chat/routers/Main/index';
import SettingsNavigator from '../../../settings/routers/Main/index';
import ProfileNavigator from '../../../profile/routers/Main/index';
import Screens, { InnerScreens } from '../index';

// constants
import {
  AUTH_SCREEN_NAME,
  APP_SCREEN_NAME,
  FEED_SCREEN_NAME,
  CHAT_LIST_SCREEN_NAME,
  SETTINGS_SCREEN_NAME,
  PROFILE_SCREEN_NAME,
} from '../../constants/routes';

interface IPostAuthNavigatorProps {}

const PostAuthNavigator: FC<IPostAuthNavigatorProps> = () => {
  return (
    <InnerScreens.Navigator initialRouteName={FEED_SCREEN_NAME}>
      <InnerScreens.Screen name={FEED_SCREEN_NAME} component={FeedNavigator} />
      <InnerScreens.Screen
        name={CHAT_LIST_SCREEN_NAME}
        component={ChatListNavigator}
      />
      <InnerScreens.Screen
        name={SETTINGS_SCREEN_NAME}
        component={SettingsNavigator}
      />
      <InnerScreens.Screen
        name={PROFILE_SCREEN_NAME}
        component={ProfileNavigator}
      />
    </InnerScreens.Navigator>
  );
};

const AppNavigator: FC<IPostAuthNavigatorProps> = () => {
  return (
    <Screens.Navigator
      initialRouteName={AUTH_SCREEN_NAME}
      screenOptions={{
        headerShown: false,
      }}>
      <Screens.Screen
        name={AUTH_SCREEN_NAME}
        component={AuthNavigator} // not here
      />
      <Screens.Screen
        name={APP_SCREEN_NAME} // not here
        component={PostAuthNavigator}
      />
    </Screens.Navigator>
  );
};

interface IAppNavigatorContainerProps {}

const AppNavigatorContainer: FC<IAppNavigatorContainerProps> = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default memo(AppNavigatorContainer);
