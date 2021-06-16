import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IEditEmailScreenViewProps {}

const EditEmailScreenView: FC<IEditEmailScreenViewProps> = () => {
  return (
    <View style={styles.editEmailScreenStyle}>
      <Text>Email screen</Text>
    </View>
  );
};

export default memo(EditEmailScreenView);
