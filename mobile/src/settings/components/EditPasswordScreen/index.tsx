import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IEditPasswordScreenViewProps {}

const EditPasswordScreenView: FC<IEditPasswordScreenViewProps> = () => {
  return (
    <View style={styles.editPasswordScreenStyle}>
      <Text>Password screen</Text>
    </View>
  );
};

export default memo(EditPasswordScreenView);
