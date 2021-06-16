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

const Screens = createStackNavigator<SettingsStackParamList>();

const SettingsMainNavigator: FC<ISettingsNavigatorProps> = () => {
  const accountSettingsBack = useBackButtonNavigation();
  return (
    <Screens.Navigator initialRouteName={SETTINGS_STACK_NAME}>
      <Screens.Screen
        name={SETTINGS_STACK_NAME}
        component={Settings}
        options={{
          headerLeft: () => <HeaderBackButton onPress={accountSettingsBack} />,
        }}
      />
      <Screens.Screen
        name={ACCOUNT_STACK_NAME}
        component={AccountRouter}
        options={{ headerShown: false }}
      />
    </Screens.Navigator>
  );
};

export default memo(SettingsMainNavigator);
