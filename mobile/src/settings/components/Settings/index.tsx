import React, { FC, memo } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

interface ISettingsComponentProps {
  logout(): void;
}

const SettingsView: FC<ISettingsComponentProps> = (props) => {
  return (
    <View style={styles.settingsStyle}>
      <Text>Settings Screen</Text>
      <Button title="Log out" onPress={props.logout} />
    </View>
  );
};

export default memo(SettingsView);
