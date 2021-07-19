import React, { FC, memo } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

// hooks
import { useHandleAccountSettingsNavigation } from 'settings/hooks/useHandleAccountSettingsNavigation';
import { useToggleThemeMutation } from '@/common/types/gql.generated';
interface IAccountSettingsButtonContainerProps {}

const AccountSettingsButtonContainer: FC<IAccountSettingsButtonContainerProps> = () => {
  const navigate = useHandleAccountSettingsNavigation();
  const [edit] = useToggleThemeMutation();
  return (
    <>
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={navigate}
        label="Account settings"
      />
      <TextButton
        containerStyle={styles.accountSettingsButtonStyles}
        onPress={async () => {
          try {
            const { data } = await edit({ variables: { input: { a: '' } } });
            console.log(data?.toggleTheme);
          } catch (error) {
            console.log(error);
          }
        }}
        label="Theme switcher"
      />
    </>
  );
};

export default memo(AccountSettingsButtonContainer);
