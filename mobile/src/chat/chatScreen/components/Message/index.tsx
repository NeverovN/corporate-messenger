import React, { FC, memo, useMemo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Directions from '../../constants/direction';
import { useSetMsgStyle } from '../../hooks/useSetMsgStyle';

// styles
import styles from './styles';

interface IMessageViewProps {
  content: string;
  author: string;
  direction: Directions;
  createdAt: string;
  lastEdit: string | null;
  onPress(): void;
}

const MessageView: FC<IMessageViewProps> = (props) => {
  const lastEditText = useMemo(
    () => (props.lastEdit ? <Text>last edit: {props.lastEdit}</Text> : null),
    [props.lastEdit],
  );

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
