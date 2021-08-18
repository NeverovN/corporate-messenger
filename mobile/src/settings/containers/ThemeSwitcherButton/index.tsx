import React, { FC, memo } from 'react';
import Toast from 'react-native-toast-message';

// components
import ThemeSwitcherButtonView from '@/settings/components/ThemeSwitcherButton';

// hooks
import { useSetTheme } from '@/settings/hooks/useSetTheme';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';

interface IThemeSwitcherButtonContainerProps {}

const ThemeSwitcherButtonContainer: FC<IThemeSwitcherButtonContainerProps> = () => {
  const setTheme = useSetTheme();
  const themeName = useSelector((state: RootState) => state.currentTheme.theme);
  const onThemeButtonPress =
    themeName !== 'native'
      ? (theme: string) => {
          if (theme === themeName) {
            return;
          }
          if (themeName === 'light') {
            setTheme('dark');
          }
          if (themeName === 'dark') {
            setTheme('light');
          }
        }
      : () => {
          Toast.show({
            type: 'error',
            text1: 'Please, disable native theme first',
            topOffset: 50,
          });
        };

  return (
    <ThemeSwitcherButtonView
      toggleTheme={onThemeButtonPress}
      currentTheme={themeName}
    />
  );
};

export default memo(ThemeSwitcherButtonContainer);
