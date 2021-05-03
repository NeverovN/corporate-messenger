import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IProfileComponentProps {}

const ProfileView: FC<IProfileComponentProps> = () => {
  return (
    <View style={styles.profileStyle}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default memo(ProfileView);
