import React, { FC, memo, useMemo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import FbGrid from 'react-native-fb-image-grid';
// consts
import Directions from '../../constants/direction';

// styles
import styles from './styles';

// hooks
import { useHandleMessageActions } from '../../hooks/useHandleMessageActions';
import { useGetMessage } from '../../hooks/useGetMessage';
import { useSetMsgStyle } from '../../hooks/useSetMsgStyle';

// types
import { IMessageItem } from '../../types/message';

interface IMessageViewProps extends IMessageItem {
  direction: Directions;
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

  const isReadIndicator = useMemo(
    () => (!props.isRead ? <Text>unread</Text> : null),
    [props.isRead],
  );

  const [msgStyle, viewStyle, actions] = useSetMsgStyle(props.direction);

  return (
    <View style={viewStyle}>
      <ContextMenu
        title={'Message Actions'}
        actions={actions}
        onPress={(e) =>
          actionHandler(e.nativeEvent.name, message, props.setEditMessage)
        }>
        <TouchableOpacity
          style={{ ...msgStyle, ...styles.commonMessageStyle }}
          onPress={props.onPress}>
          {props.content.text ? (
            <Text style={styles.textStyle}>{props.content.text}</Text>
          ) : null}
          <FbGrid
            images={props.content.media}
            onPress={() => null}
            style={styles.mediaStyle}
          />
          <Text style={styles.textStyle}>{props.createdAt}</Text>
        </TouchableOpacity>
      </ContextMenu>
      {isReadIndicator}
      {lastEditText}
    </View>
  );
};

export default memo(MessageView);
