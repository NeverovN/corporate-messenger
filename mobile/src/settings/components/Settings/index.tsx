import React, { FC, memo } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

// containers
import AccountSettingsButton from 'settings/containers/AccountSettingsButton';

interface ISettingsComponentProps {
  logout(): void;
}

const SettingsView: FC<ISettingsComponentProps> = (props) => {
  return (
    <View style={styles.settingsStyle}>
      <Text>Settings Screen</Text>
      <AccountSettingsButton />
      <Button title="Log out" onPress={props.logout} />
    </View>
  );
};

export default memo(SettingsView);
