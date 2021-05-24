import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IUserStatusViewProps {
  userStatus: string;
}

const UserStatusView: FC<IUserStatusViewProps> = (props) => {
  return (
    <View style={styles.userStatusViewStyle}>
      <Text>{props.userStatus}</Text>
    </View>
  );
};

export default memo(UserStatusView);
