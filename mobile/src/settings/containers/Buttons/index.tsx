import React, { FC, memo } from 'react';
import { View } from 'react-native';
// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import { useStyles } from './styles';

// hooks
import { useHandleAccountSettingsNavigation } from 'settings/hooks/useHandleAccountSettingsNavigation';
import { useToggleTheme } from '@/settings/hooks/useToggleTheme';
import { useGetUserQuery } from '@/common/types/gql.generated';
interface IAccountSettingsButtonContainerProps {}

const AccountSettingsButtonContainer: FC<IAccountSettingsButtonContainerProps> = () => {
  const styles = useStyles();
  const navigate = useHandleAccountSettingsNavigation();
  const toggleTheme = useToggleTheme();
  const { data } = useGetUserQuery();
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
        onPress={toggleTheme}
        label="BANLIST"
        labelStyle={styles.textStyle}
      />
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={toggleTheme}
        label={`Theme ${data?.getUser.theme}`}
        labelStyle={styles.textStyle}
      />
    </View>
  );
};

export default memo(AccountSettingsButtonContainer);
