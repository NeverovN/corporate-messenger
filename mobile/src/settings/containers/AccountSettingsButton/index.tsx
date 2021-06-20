import React, { FC, memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

// styles
import styles from './styles';

// hooks
import { useHandleAccountSettingsNavigation } from 'settings/hooks/useHandleAccountSettingsNavigation';

interface IAccountSettingsButtonContainerProps {}

const AccountSettingsButtonContainer: FC<IAccountSettingsButtonContainerProps> = () => {
  const navigate = useHandleAccountSettingsNavigation();

  return (
    <View style={styles.accountSettingsButtonViewStyle}>
      <TouchableOpacity // TODO: use common button
        style={styles.accountSettingsButtonTouchStyles}
        onPress={navigate}>
        <Text>Account settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(AccountSettingsButtonContainer);
