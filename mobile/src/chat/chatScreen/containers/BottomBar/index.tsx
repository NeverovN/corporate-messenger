import React, { FC, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageOrVideo } from 'react-native-image-crop-picker';

// components
import BottomBarView from 'chat/chatScreen/components/BottomBar';

// hooks
import { useClipPressHandler } from 'chat/chatScreen/hooks/useClipPressHandler';
import { useEmojiPressHandler } from 'chat/chatScreen/hooks/useEmojiPressHandler';
import { useSendPressHandler } from 'chat/chatScreen/hooks/useSendPressHandler';
import { useEditMessage } from 'chat/chatScreen/hooks/useEditMessage';

// types
import { IMessageItem } from 'chat/chatScreen/types/message';
import { RootState } from 'common/redux/store';
import { remove, save } from '@/common/redux/slices/savedMessage';

interface IBottomBarContainerProps {
  editMessage: IMessageItem | null;
  setEditMessage(msg: IMessageItem | null): void;
}

const BottomBarContainer: FC<IBottomBarContainerProps> = ({
  editMessage,
  setEditMessage,
}) => {
  const dispatch = useDispatch();
  const savedMessage = useSelector(
    (state: RootState) => state.message.messageText,
  );
  const [message, setMessage] = useState<string>('');
  const [editingMessage, setEditingMessage] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [media, setMedia] = useState<ImageOrVideo[]>([]);
  const onClipPress = useClipPressHandler(setMedia);
  const onEmojiPress = useEmojiPressHandler();
  const onSendPress = useSendPressHandler(message, setMessage);
  const onEditPressed = useEditMessage(
    editingMessage,
    editMessage?.id || null,
    setEditingMessage,
    setEditMessage,
  );

  useEffect(() => {
    if (editMessage) {
      dispatch(save(message));
      console.log('saved message', savedMessage);
      setEditingMessage(editMessage.content);
    } else {
      if (savedMessage) {
        setMessage(savedMessage);
      }
      dispatch(remove());
    }
  }, [dispatch, editMessage, message, savedMessage]);

  return editMessage ? (
    <BottomBarView
      value={editingMessage}
      onValueChange={setEditingMessage}
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
