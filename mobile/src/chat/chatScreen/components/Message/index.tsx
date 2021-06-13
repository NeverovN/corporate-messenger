import React, { FC, memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IMessageViewProps {
  content: string;
  direction: string;
  onPress(): void;
}

const MessageView: FC<IMessageViewProps> = (props) => {
  const msgStyle =
    props.direction === 'outgoing'
      ? styles.outgoingMessageStyle
      : styles.incomingMessageStyle;
  const textStyle =
    props.direction === 'outgoing'
      ? styles.outgoingTextStyle
      : styles.incomingTextStyle;
  return (
    <TouchableOpacity style={msgStyle} onPress={props.onPress}>
      <Text style={textStyle}>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default memo(MessageView);
