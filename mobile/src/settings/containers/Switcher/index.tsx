import { RootState } from '@/common/redux/store';
import React, { FC, memo, useState } from 'react';
import { Switch } from 'react-native';
import { useTheme } from 'react-native-stylex';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'common/redux/reducers/currentTheme';
import { useSetTheme } from '@/settings/hooks/useSetTheme';

interface ISwitchThemeContainerProps {}

const SwitchThemeContainer: FC<ISwitchThemeContainerProps> = () => {
  const { palette } = useTheme();
  const setTheme = useSetTheme();
  const dispatch = useDispatch();
  const themeName = useSelector((state: RootState) => state.currentTheme.theme);
  const [isEnabled, setIsEnabled] = useState<boolean>(
    themeName === 'native' ? true : false,
  );
  const toggleSwitcher = () => {
    if (isEnabled) {
      dispatch(set('light'));
      setTheme('light');
    } else {
      dispatch(set('native'));
      setTheme('native');
    }
    setIsEnabled((prev) => !prev);
  };
  return (
    <Switch
      trackColor={{ false: palette.black, true: palette.secondaryInactive }}
      thumbColor={
        isEnabled ? palette.secondaryInactive : palette.secondaryInactive
      }
      onValueChange={toggleSwitcher}
      value={isEnabled}
      ios_backgroundColor={palette.tint}
    />
  );
};

export default memo(SwitchThemeContainer);
