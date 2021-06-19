import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

// containers
import EditButton from 'settings/containers/EditButton';

// constants
import Directions from 'settings/constants/directions';

interface IAccountScreenViewProps {}

const AccountScreenView: FC<IAccountScreenViewProps> = () => {
  return (
    <View style={styles.accountScreenStyle}>
      <Text style={styles.textStyle}>Edit user account information menu</Text>
      <EditButton screen={Directions.EMAIL} title="Edit email" />
      <EditButton screen={Directions.PASSWORD} title="Edit password" />
      <EditButton screen={Directions.USERNAME} title="Edit username" />
    </View>
  );
};

export default memo(AccountScreenView);
