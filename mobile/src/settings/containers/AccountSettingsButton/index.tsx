import React, { FC, memo } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

// hooks
import { useHandleAccountSettingsNavigation } from 'settings/hooks/useHandleAccountSettingsNavigation';
import { useToggleTheme } from '@/settings/hooks/useToggleTheme';
import { useGetUserQuery } from '@/common/types/gql.generated';
interface IAccountSettingsButtonContainerProps {}

const AccountSettingsButtonContainer: FC<IAccountSettingsButtonContainerProps> = () => {
  const navigate = useHandleAccountSettingsNavigation();
  const toggleTheme = useToggleTheme();
  const { data } = useGetUserQuery();
  return (
    <>
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={navigate}
        label="Account settings"
      />
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={toggleTheme}
        label={`Theme ${data?.getUser.theme}`}
      />
    </>
  );
};

export default memo(AccountSettingsButtonContainer);
