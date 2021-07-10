import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IEditPostScreenViewProps {}

const EditPostScreenView: FC<IEditPostScreenViewProps> = () => {
  return (
    <View style={styles.screenStyle}>
      <Text>Edit post screen</Text>
    </View>
  );
};

export default memo(EditPostScreenView);
