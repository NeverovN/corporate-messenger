import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IUserDataViewProps {
  author: string;
  createdAt: string;
}

const UserDataView: FC<IUserDataViewProps> = (props) => {
  return (
    <View style={styles.userDataStyle}>
      <Text>{props.author}</Text>
      <Text>{props.createdAt}</Text>
    </View>
  );
};

export default memo(UserDataView);
