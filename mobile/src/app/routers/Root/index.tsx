import React, { memo, useMemo, useState } from 'react';
import { StatusBar, Appearance } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { RootStackParamList } from 'app/types/routes';

// constants
import {
  AUTH_STACK_NAME,
  SPLASH_SCREEN_NAME,
  MAIN_STACK_NAME,
} from 'app/constants/routes';

// providers
import { ThemeProvider, DefaultTheme } from 'react-native-stylex';

// screens
import SplashScreen from '../../containers/Splash';

// routers
import AuthRouter from '@/auth/routers/Auth';
import MainRouter from '../Main';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';
import { getTheme } from '@/app/utils/getTheme';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackRouter = () => {
  const [barStyle, setBarStyle] = useState<'dark-content' | 'light-content'>(
    'dark-content',
  );
  const themeName = useSelector((state: RootState) => state.currentTheme.theme);
  const nativeBarColor =
    Appearance.getColorScheme() === 'light' ? 'dark-content' : 'light-content';

  const palette = useMemo(() => {
    themeName === 'light'
      ? setBarStyle('dark-content')
      : themeName === 'dark'
      ? setBarStyle('light-content')
      : setBarStyle(nativeBarColor);
    return getTheme(themeName);
  }, [themeName, nativeBarColor]);
  const theme: DefaultTheme = { palette };
  return (
    <ThemeProvider value={theme}>
      <StatusBar barStyle={barStyle} />
      <RootStack.Navigator
        initialRouteName={SPLASH_SCREEN_NAME}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <RootStack.Screen name={SPLASH_SCREEN_NAME} component={SplashScreen} />
        <RootStack.Screen name={AUTH_STACK_NAME} component={AuthRouter} />
        <RootStack.Screen name={MAIN_STACK_NAME} component={MainRouter} />
      </RootStack.Navigator>
    </ThemeProvider>
  );
};

export default memo(RootStackRouter);
