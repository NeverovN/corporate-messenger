import React, { memo } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

// routers
import RootRouter from './Root';

import { ThemeProvider, DefaultTheme } from 'react-native-paper';

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
    <ThemeProvider
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, ...theme },
      }}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...NavigationDefaultTheme.colors,
            background: theme.primary,
          },
        }}>
        <RootRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default memo(NavigationProvider);
