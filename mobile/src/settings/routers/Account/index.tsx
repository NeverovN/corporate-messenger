import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import {
  ACCOUNT_SCREEN_NAME,
  EDIT_EMAIL_SCREEN_NAME,
  EDIT_PASSWORD_SCREEN_NAME,
  EDIT_USERNAME_SCREEN_NAME,
} from '@/settings/constants/routes';
import { useStyles } from './styles';

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
  const styles = useStyles();
  return (
    <Screens.Navigator initialRouteName={ACCOUNT_SCREEN_NAME}>
      <Screens.Screen
        name={ACCOUNT_SCREEN_NAME}
        component={AccountScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title: 'USER SETTINGS',
        }}
      />
      <Screens.Screen
        name={EDIT_EMAIL_SCREEN_NAME}
        component={EditEmailScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title: 'USER SETTINGS',
        }}
      />
      <Screens.Screen
        name={EDIT_PASSWORD_SCREEN_NAME}
        component={EditPasswordScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title: 'USER SETTINGS',
        }}
      />
      <Screens.Screen
        name={EDIT_USERNAME_SCREEN_NAME}
        component={EditUsernameScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title: 'USER SETTINGS',
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(AccountSettingsNavigator);
