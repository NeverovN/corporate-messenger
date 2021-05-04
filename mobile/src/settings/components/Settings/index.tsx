import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface ISettingsComponentProps {}

const SettingsView: FC<ISettingsComponentProps> = () => {
  return (
    <View style={styles.settingsStyle}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default memo(SettingsView);
