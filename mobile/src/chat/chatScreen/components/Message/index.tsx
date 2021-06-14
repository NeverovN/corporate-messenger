import React, { FC, memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

// styles
import styles from './styles';

interface IMessageViewProps {
  content: string;
  author: string;
  direction: string;
  createdAt: string;
  lastEdit: string | null;
  onPress(): void;
}

const MessageView: FC<IMessageViewProps> = (props) => {
  const lastEditText = props.lastEdit ? (
    <Text>last edit: {props.lastEdit}</Text>
  ) : null;
  const msgStyle =
    props.direction === 'outgoing'
      ? styles.outgoingMessageStyle
      : styles.incomingMessageStyle;
  const textStyle =
    props.direction === 'outgoing'
      ? styles.outgoingTextStyle
      : styles.incomingTextStyle;
  const viewStyle =
    props.direction === 'outgoing'
      ? styles.outgoingViewStyle
      : styles.incomingViewStyle;

  return (
    <View style={viewStyle}>
      <TouchableOpacity
        style={{ ...msgStyle, ...styles.commonMessageStyle }}
        onPress={props.onPress}>
        <Text style={textStyle}>{props.content}</Text>
        <Text style={textStyle} numberOfLines={4}>
          {props.createdAt}
        </Text>
      </TouchableOpacity>
      {lastEditText}
    </View>
  );
};

export default memo(MessageView);
