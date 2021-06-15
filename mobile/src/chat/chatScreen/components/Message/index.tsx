import React, { FC, memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useSetMsgStyle } from '../../hooks/useSetMsgStyle';

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

  const [msgStyle, textStyle, viewStyle] = useSetMsgStyle(props.direction);

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
