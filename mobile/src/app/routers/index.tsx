import React, { memo } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

// routers
import RootRouter from './Root';

// colors
import { lightTheme, darkTheme } from 'common/constants/colors';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';

const NavigationProvider = () => {
  const selectedTheme = useSelector(
    (state: RootState) => state.currentTheme.theme,
  );
  const theme = selectedTheme === 'light' ? lightTheme : darkTheme;

  return (
    <NavigationContainer
      theme={{
        ...NavigationDefaultTheme,
        colors: {
          ...NavigationDefaultTheme.colors,
          background: theme.primary,
        },
      }}>
      <RootRouter />
    </NavigationContainer>
  );
};

export default memo(NavigationProvider);
