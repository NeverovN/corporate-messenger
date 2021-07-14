import React, { FC, memo, useMemo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import Directions from '../../constants/direction';
import { useSetMsgStyle } from '../../hooks/useSetMsgStyle';
import ACTIONS from '../../constants/actions';

// styles
import styles from './styles';

// hooks
import { useHandleMessageActions } from '../../hooks/useHandleMessageActions';
import { useGetMessage } from '../../hooks/useGetMessage';
import { IMessageItem } from '../../types/message';

interface IMessageViewProps {
  id: string;
  content: string;
  author: string;
  direction: Directions;
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;

  setEditMessage(msg: IMessageItem | null): void;
  onPress(): void;
}

const MessageView: FC<IMessageViewProps> = (props) => {
  const actionHandler = useHandleMessageActions();
  const message = useGetMessage(props.id);

  const lastEditText = useMemo(
    () => (props.lastEdit ? <Text>last edit: {props.lastEdit}</Text> : null),
    [props.lastEdit],
  );

  // works incorrect
  const isReadIndicator = useMemo(
    () => (!props.isRead ? <Text>unread</Text> : null),
    [props.isRead],
  );

  const [msgStyle, textStyle, viewStyle] = useSetMsgStyle(props.direction);

  return (
    <View style={viewStyle}>
      <ContextMenu
        title={'Message Actions'}
        actions={[
          { title: ACTIONS.EDIT },
          { title: ACTIONS.DELETE, destructive: true },
        ]}
        onPress={(e) =>
          actionHandler(e.nativeEvent.name, message, props.setEditMessage)
        }>
        <TouchableOpacity
          style={{ ...msgStyle, ...styles.commonMessageStyle }}
          onPress={props.onPress}>
          <Text style={textStyle}>{props.content}</Text>
          <Text style={textStyle}>{props.createdAt}</Text>
        </TouchableOpacity>
      </ContextMenu>
      {isReadIndicator}
      {lastEditText}
    </View>
  );
};

export default memo(MessageView);
