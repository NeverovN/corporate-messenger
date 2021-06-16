import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IEditUsernameScreenViewProps {}

const EditUsernameScreenView: FC<IEditUsernameScreenViewProps> = () => {
  return (
    <View style={styles.editUsernameScreenStyle}>
      <Text>Name screen</Text>
    </View>
  );
};

export default memo(EditUsernameScreenView);
