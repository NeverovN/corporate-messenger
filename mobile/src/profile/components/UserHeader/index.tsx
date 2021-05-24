import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// containers
import UserImage from 'profile/containers/UserImage';
import UserHeaderInfo from 'profile/containers/UserHeaderInfo';

interface IUserHeaderViewProps {}

const UserHeaderView: FC<IUserHeaderViewProps> = () => {
  return (
    <View style={styles.userMainInfoStyle}>
      <UserImage />
      <UserHeaderInfo />
    </View>
  );
};

export default memo(UserHeaderView);
