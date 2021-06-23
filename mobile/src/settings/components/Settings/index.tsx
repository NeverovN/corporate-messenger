import React, { FC, memo } from 'react';
import { SafeAreaView, View, Button } from 'react-native';

import styles from './styles';

// containers
import AccountSettingsButton from 'settings/containers/AccountSettingsButton';
import UserTile from '@/settings/containers/UserTile';

interface ISettingsComponentProps {
  logout(): void;
}

const SettingsView: FC<ISettingsComponentProps> = (props) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.settingsStyle}>
        <UserTile />
        <AccountSettingsButton />
      </View>
      <Button title="Log out" onPress={props.logout} color="red" />
    </SafeAreaView>
  );
};

export default memo(SettingsView);
