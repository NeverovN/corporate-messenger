import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routers
import RootRouter from './Root';
import SettingsRouter from '@/settings/routers/Main';

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  );
};

export default memo(NavigationProvider);
