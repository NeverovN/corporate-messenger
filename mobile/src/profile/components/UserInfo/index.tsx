import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IUserInfoViewProps {
  userName: string;
  userOnline: string; // string for now
  userStatus: string;
}

const UserInfoView: FC<IUserInfoViewProps> = (props) => {
  return (
    <View style={styles.userInfoViewStyle}>
      <Text>{props.userName} </Text>
      <Text>{props.userOnline}</Text>
      <Text>{props.userStatus}</Text>
    </View>
  );
};

export default memo(UserInfoView);
