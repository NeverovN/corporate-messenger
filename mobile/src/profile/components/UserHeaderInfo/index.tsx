import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// containers
import UserName from 'profile/containers/UserName';
import UserStatus from 'profile/containers/UserStatus';
import UserOnline from 'profile/containers/UserOnline';

interface IUserHeaderInfoViewProps {}

const UserHeaderInfoView: FC<IUserHeaderInfoViewProps> = () => {
  return (
    <View style={styles.userHeaderInfoStyle}>
      <UserName />
      <UserStatus />
      <UserOnline />
    </View>
  );
};

export default memo(UserHeaderInfoView);
