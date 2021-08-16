import React, { FC, memo } from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import { useStyles } from './styles';

// containers
import Switcher from '../Switcher';

// hooks
import { useHandleAccountSettingsNavigation } from 'settings/hooks/useHandleAccountSettingsNavigation';
import { useSetTheme } from '@/settings/hooks/useSetTheme';

// types
import { RootState } from '@/common/redux/store';

interface IAccountSettingsButtonContainerProps {}

const AccountSettingsButtonContainer: FC<IAccountSettingsButtonContainerProps> = () => {
  const styles = useStyles();
  const navigate = useHandleAccountSettingsNavigation();
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
    <View style={styles.wrapperStyle}>
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={navigate}
        label="USER SETTINGS"
        labelStyle={styles.textStyle}
      />
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        label="BANLIST"
        labelStyle={styles.textStyle}
      />
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={onThemeButtonPress}
        label={`Theme ${themeName}`}
        labelStyle={styles.textStyle}
      />
      <Switcher />
    </View>
  );
};

export default memo(AccountSettingsButtonContainer);
