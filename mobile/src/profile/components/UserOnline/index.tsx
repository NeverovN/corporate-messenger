import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IUserOnlineViewProps {
  userOnline: string; // string for now
}

const UserOnlineView: FC<IUserOnlineViewProps> = (props) => {
  return (
    <View style={styles.userOnlineViewStyle}>
      <Text>{props.userOnline}</Text>
    </View>
  );
};

export default memo(UserOnlineView);
