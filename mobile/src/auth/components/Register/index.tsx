import React, { memo, FC } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IRegisterScreenProps {}

const RegisterView: FC<IRegisterScreenProps> = () => {
  return (
    <View style={styles.registerStyle}>
      <Text>REGISTER SCREEN</Text>
    </View>
  );
};

export default memo(RegisterView);
