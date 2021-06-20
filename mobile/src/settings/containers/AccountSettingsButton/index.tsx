import React, { FC, memo } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

// hooks
import { useHandleAccountSettingsNavigation } from 'settings/hooks/useHandleAccountSettingsNavigation';

interface IAccountSettingsButtonContainerProps {}

const AccountSettingsButtonContainer: FC<IAccountSettingsButtonContainerProps> = () => {
  const navigate = useHandleAccountSettingsNavigation();

  return (
    <TextButton
      containerStyle={styles.accountSettingsButtonStyles}
      onPress={navigate}
      label="Account settings"
    />
  );
};

export default memo(AccountSettingsButtonContainer);
