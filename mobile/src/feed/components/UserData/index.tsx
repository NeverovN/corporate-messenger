import { getDate } from '@/profile/utils/getDate';
import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IUserDataViewProps {
  username: string;
  createdAt: string;
}

const UserDataView: FC<IUserDataViewProps> = (props) => {
  return (
    <View style={styles.userDataStyle}>
      <Text>{props.username}</Text>
      <Text>{getDate(props.createdAt)}</Text>
    </View>
  );
};

export default memo(UserDataView);
