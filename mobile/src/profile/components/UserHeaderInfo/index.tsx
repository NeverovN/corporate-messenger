import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// containers
import UserInfoContainer from 'profile/containers/UserInfo';

interface IUserHeaderInfoViewProps {}

const UserHeaderInfoView: FC<IUserHeaderInfoViewProps> = () => {
  return (
    <View style={styles.userHeaderInfoStyle}>
      <UserInfoContainer />
    </View>
  );
};

export default memo(UserHeaderInfoView);
