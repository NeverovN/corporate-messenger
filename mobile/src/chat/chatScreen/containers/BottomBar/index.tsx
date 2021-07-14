import React, { FC, memo, useEffect, useState } from 'react';
import { ImageOrVideo } from 'react-native-image-crop-picker';

// components
import BottomBarView from 'chat/chatScreen/components/BottomBar';

// hooks
import { useClipPressHandler } from 'chat/chatScreen/hooks/useClipPressHandler';
import { useEmojiPressHandler } from 'chat/chatScreen/hooks/useEmojiPressHandler';
import { useSendPressHandler } from 'chat/chatScreen/hooks/useSendPressHandler';

// types
import { IMessageItem } from '../../types/message';
import { useEditMessage } from '../../hooks/useEditMessage';

interface IBottomBarContainerProps {
  editMessage: IMessageItem | null;
  setEditMessage(msg: IMessageItem | null): void;
}

const BottomBarContainer: FC<IBottomBarContainerProps> = ({
  editMessage,
  setEditMessage,
}) => {
  const [message, setMessage] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [media, setMedia] = useState<ImageOrVideo[]>([]);
  const onClipPress = useClipPressHandler(setMedia);
  const onEmojiPress = useEmojiPressHandler();
  const onSendPress = useSendPressHandler(message, setMessage);
  const onEditPressed = useEditMessage(
    message,
    editMessage?.id || null,
    setMessage,
    setEditMessage,
  );

  useEffect(() => {
    editMessage ? setMessage(editMessage.content) : setMessage('');
  }, [editMessage]);

  return editMessage ? (
    <BottomBarView
      value={message}
      onValueChange={setMessage}
      onClipPress={onClipPress}
      onEmojiPress={onEmojiPress}
      onSendPress={onEditPressed}
    />
  ) : (
    <BottomBarView
      value={message}
      onValueChange={setMessage}
      onClipPress={onClipPress}
      onEmojiPress={onEmojiPress}
      onSendPress={onSendPress}
    />
  );
};

export default memo(BottomBarContainer);
