import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IUserDataViewProps {}

const UserDataView: FC<IUserDataViewProps> = () => {
  return (
    <View style={styles.userDataStyle}>
      <Text>balbla</Text>
      <Text>abrakadabra</Text>
    </View>
  );
};

export default memo(UserDataView);
