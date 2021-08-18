import React, { FC, memo } from 'react';

// components
import ThemeSwitcherButtonView from '@/settings/components/ThemeSwitcherButton';

// hooks
import { useSetTheme } from '@/settings/hooks/useSetTheme';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';
import { Alert } from 'react-native';

interface IThemeSwitcherButtonContainerProps {}

const ThemeSwitcherButtonContainer: FC<IThemeSwitcherButtonContainerProps> = () => {
  const setTheme = useSetTheme();
  const themeName = useSelector((state: RootState) => state.currentTheme.theme);
  const onThemeButtonPress =
    themeName !== 'native'
      ? () => {
          if (themeName === 'light') {
            setTheme('dark');
          }
          if (themeName === 'dark') {
            setTheme('light');
          }
        }
      : () => {
          Alert.alert(
            'Warning',
            'Native theme is chosen. Please, change settings before toggling theme',
          );
        };

  return (
    <ThemeSwitcherButtonView
      toggleTheme={onThemeButtonPress}
      currentTheme={themeName}
    />
  );
};

export default memo(ThemeSwitcherButtonContainer);
