import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IUserInfoViewProps {
  userName: string;
  lastMessage: string; // string for now
}

const UserInfoView: FC<IUserInfoViewProps> = (props) => {
  return (
    <View style={styles.chatInfoViewStyle}>
      <Text>{props.userName} </Text>
      <Text>{props.lastMessage}</Text>
    </View>
  );
};

export default memo(UserInfoView);
