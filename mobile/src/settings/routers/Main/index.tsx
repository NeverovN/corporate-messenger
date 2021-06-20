import React, { memo, FC } from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

// constants
import {
  SETTINGS_STACK_NAME,
  ACCOUNT_STACK_NAME,
} from '@/settings/constants/routes';

// containers
import Settings from '@/settings/containers/Settings';

// routers
import AccountRouter from '../Account';

// types
import { SettingsStackParamList } from '@/settings/types/routes';

// hooks
import { useBackButtonNavigation } from 'common/hooks/useBackButtonNavigation';

interface ISettingsNavigatorProps {}

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsMainNavigator: FC<ISettingsNavigatorProps> = () => {
  const accountSettingsBack = useBackButtonNavigation();

  return (
    <SettingsStack.Navigator initialRouteName={SETTINGS_STACK_NAME}>
      <SettingsStack.Screen
        name={SETTINGS_STACK_NAME}
        component={Settings}
        options={{
          headerLeft: () => <HeaderBackButton onPress={accountSettingsBack} />,
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
