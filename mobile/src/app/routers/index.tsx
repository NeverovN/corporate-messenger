import React, { memo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// routers
import RootRouter from './Root';

// colors
import COLORS from 'common/constants/colors';

const NavigationProvider = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: COLORS.primary },
      }}>
      <RootRouter />
    </NavigationContainer>
  );
};

export default memo(NavigationProvider);
