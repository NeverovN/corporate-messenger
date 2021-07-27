import React, { FC, memo, useMemo, useState } from 'react';
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
  const [imgBase64, setImgBase64] = useState<string[]>([]);

  props.content.media?.then((res) => {
    setImgBase64(res);
  });

  const images = props.content.media ? (
    <FbGrid images={imgBase64} style={styles.mediaStyle} />
  ) : null;

  const lastEditText = useMemo(
    () => (props.lastEdit ? <Text>last edit: {props.lastEdit}</Text> : null),
    [props.lastEdit],
  );

  // works incorrect
  const isReadIndicator = useMemo(
    () => (!props.isRead ? <Text>unread</Text> : null),
    [props.isRead],
  );

  const [msgStyle, textStyle, viewStyle, actions] = useSetMsgStyle(
    props.direction,
  );

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
            <Text style={textStyle}>{props.content.text}</Text>
          ) : null}
          {images}
          <Text style={textStyle}>{props.createdAt}</Text>
        </TouchableOpacity>
      </ContextMenu>
      {isReadIndicator}
      {lastEditText}
    </View>
  );
};

export default memo(MessageView);
