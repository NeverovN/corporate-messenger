import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import {
  SETTINGS_STACK_NAME,
  ACCOUNT_STACK_NAME,
} from '@/settings/constants/routes';
import COLORS from 'common/constants/colors';

// containers
import Settings from '@/settings/containers/Settings';

// routers
import AccountRouter from '../Account';

// types
import { SettingsStackParamList } from '@/settings/types/routes';

// common components
import HeaderBackButtonWithoutText from '@/common/components/HeaderBackButtonWithoutText';

interface ISettingsNavigatorProps {}

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsMainNavigator: FC<ISettingsNavigatorProps> = () => {
  return (
    <SettingsStack.Navigator initialRouteName={SETTINGS_STACK_NAME}>
      <SettingsStack.Screen
        name={SETTINGS_STACK_NAME}
        component={Settings}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Mulish-Regular_Light',
          },
          title: 'POST',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <SettingsStack.Screen
        name={ACCOUNT_STACK_NAME}
        component={AccountRouter}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
};

export default memo(SettingsMainNavigator);
