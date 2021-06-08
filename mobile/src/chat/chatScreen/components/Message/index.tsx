import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IMessageViewProps {}

const MessageView: FC<IMessageViewProps> = () => {
  return (
    <View style={styles.messageStyle}>
      <Text>Message</Text>
    </View>
  );
};

export default memo(MessageView);
