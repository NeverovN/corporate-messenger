import React, { FC, memo } from 'react';

// components
import ThemeSwitcherButtonView from '@/settings/components/ThemeSwitcherButton';

// hooks
import { useToggleTheme } from '@/settings/hooks/useToggleTheme';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';

interface IThemeSwitcherButtonContainerProps {}

const ThemeSwitcherButtonContainer: FC<IThemeSwitcherButtonContainerProps> = () => {
  const toggleTheme = useToggleTheme();
  const themeName = useSelector((state: RootState) => state.currentTheme.theme);

  return (
    <ThemeSwitcherButtonView
      toggleTheme={toggleTheme}
      currentTheme={themeName}
    />
  );
};

export default memo(ThemeSwitcherButtonContainer);
