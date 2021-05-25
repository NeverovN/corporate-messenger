import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IChatScreenView {}

const ChatScreenView: FC<IChatScreenView> = () => {
  return (
    <View style={styles.chatScreenStyle}>
      <Text>Chat Screen</Text>
    </View>
  );
};

export default memo(ChatScreenView);
