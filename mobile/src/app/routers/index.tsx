// app level navigation (highest router)
import React, { FC, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routers
import AuthScreen from '../../auth/routers/Main/index';
import Login from 'root/src/auth/components/Login';

interface IAppNavigatorProps {}

const AppNavigator: FC<IAppNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <AuthScreen />
    </NavigationContainer>
  );
};

export default memo(AppNavigator);
