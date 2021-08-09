import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import { useStyles } from './styles';

// containers
import EditButton from 'settings/containers/EditButton';

// constants
import Operations from '@/settings/constants/operations';

interface IAccountScreenViewProps {}

const AccountScreenView: FC<IAccountScreenViewProps> = () => {
  const styles = useStyles();
  return (
    <View style={styles.accountScreenStyle}>
      <Text style={styles.textStyle}>
        {'What information you\nwould like to change?'}
      </Text>
      <EditButton screen={Operations.USERNAME} title="NAME" />
      <EditButton screen={Operations.EMAIL} title="EMAIL" />
      <EditButton screen={Operations.PASSWORD} title="PASSWORD" />
    </View>
  );
};

export default memo(AccountScreenView);
