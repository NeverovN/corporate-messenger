import React, { FC, memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IMessageViewProps {
  content: string;
  onPress(): void;
}

const MessageView: FC<IMessageViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.messageStyle} onPress={props.onPress}>
      <Text>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default memo(MessageView);
