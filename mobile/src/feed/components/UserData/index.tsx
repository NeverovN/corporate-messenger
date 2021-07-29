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
      <Text style={styles.primaryText}>{props.author}</Text>
      <View style={styles.spacer} />
      <Text style={styles.secondaryText}>{props.createdAt}</Text>
    </View>
  );
};

export default memo(UserDataView);
