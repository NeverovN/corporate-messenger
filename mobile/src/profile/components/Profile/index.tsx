import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// containers
import MainTile from 'profile/containers/MainTile';

interface IProfileViewProps {}

const ProfileView: FC<IProfileViewProps> = () => {
  return (
    <View style={styles.profileStyle}>
      <MainTile />
    </View>
  );
};

export default memo(ProfileView);
