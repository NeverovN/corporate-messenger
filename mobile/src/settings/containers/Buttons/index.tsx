import React, { FC, memo } from 'react';
import { View } from 'react-native';

// common components
import TextButton from '@/common/components/Button/TextButton';

// containers
import ThemeSwitcherButton from '../ThemeSwitcherButton';

// styles
import { useStyles } from './styles';

// containers
import Switcher from '../Switcher';

// hooks
import { useHandleAccountSettingsNavigation } from 'settings/hooks/useHandleAccountSettingsNavigation';

interface IAccountSettingsButtonContainerProps {}

const AccountSettingsButtonContainer: FC<IAccountSettingsButtonContainerProps> = () => {
  const styles = useStyles();
  const navigate = useHandleAccountSettingsNavigation();

  return (
    <View style={styles.wrapperStyle}>
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={navigate}
        label="USER SETTINGS"
        labelStyle={styles.textStyle}
      />
      <ThemeSwitcherButton />
      <Switcher />
    </View>
  );
};

export default memo(AccountSettingsButtonContainer);
