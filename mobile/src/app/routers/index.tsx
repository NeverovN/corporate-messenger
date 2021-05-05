import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routers
import RootRouter from './Root';

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  );
};

export default memo(NavigationProvider);
