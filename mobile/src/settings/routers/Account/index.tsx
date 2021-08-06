import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import {
  ACCOUNT_SCREEN_NAME,
  EDIT_EMAIL_SCREEN_NAME,
  EDIT_PASSWORD_SCREEN_NAME,
  EDIT_USERNAME_SCREEN_NAME,
} from '@/settings/constants/routes';
import COLORS from 'common/constants/colors';

// containers
import AccountScreen from '@/settings/containers/AccountScreen';
import EditEmailScreen from '@/settings/containers/EditEmailScreen';
import EditPasswordScreen from '@/settings/containers/EditPasswordScreen';
import EditUsernameScreen from '@/settings/containers/EditUsernameScreen';

// types
import { AccountSettingsParamList } from '@/settings/types/routes';

// hooks
import {} from 'common/hooks/useBackButtonNavigation';
import HeaderBackButtonWithoutText from '@/common/components/HeaderBackButtonWithoutText';

interface ISettingsNavigatorProps {}

const Screens = createStackNavigator<AccountSettingsParamList>();

const AccountSettingsNavigator: FC<ISettingsNavigatorProps> = () => {
  return (
    <Screens.Navigator initialRouteName={ACCOUNT_SCREEN_NAME}>
      <Screens.Screen
        name={ACCOUNT_SCREEN_NAME}
        component={AccountScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
          title: 'USER SETTINGS',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Screens.Screen
        name={EDIT_EMAIL_SCREEN_NAME}
        component={EditEmailScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
          title: 'USER SETTINGS',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Screens.Screen
        name={EDIT_PASSWORD_SCREEN_NAME}
        component={EditPasswordScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
          title: 'USER SETTINGS',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Screens.Screen
        name={EDIT_USERNAME_SCREEN_NAME}
        component={EditUsernameScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
          title: 'USER SETTINGS',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(AccountSettingsNavigator);
