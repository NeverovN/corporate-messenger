import React, { FC, memo, useState } from 'react';
import { Switch, View, Text } from 'react-native';
import { useTheme } from 'react-native-stylex';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { set } from 'common/redux/reducers/currentTheme';
import { RootState } from '@/common/redux/store';

// hooks
import { useSetTheme } from '@/settings/hooks/useSetTheme';

// styles
import { useStyles } from './styles';

interface ISwitchThemeContainerProps {}

const SwitchThemeContainer: FC<ISwitchThemeContainerProps> = () => {
  const styles = useStyles();
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
    <View style={styles.wrapperStyle}>
      <Text style={styles.textStyle}>CUSTOM</Text>
      <Switch
        onValueChange={toggleSwitcher}
        value={isEnabled}
        ios_backgroundColor={palette.tint}
      />
      <Text style={styles.textStyle}>NATIVE</Text>
    </View>
  );
};

export default memo(SwitchThemeContainer);
