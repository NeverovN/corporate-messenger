import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { Image } from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';

// components
import BottomBarView from 'chat/chatScreen/components/BottomBar';

// hooks
import { useClipPressHandler } from 'chat/chatScreen/hooks/useClipPressHandler';
import { useEmojiPressHandler } from 'chat/chatScreen/hooks/useEmojiPressHandler';
import { useSendPressHandler } from 'chat/chatScreen/hooks/useSendPressHandler';
import { useEditMessage } from 'chat/chatScreen/hooks/useEditMessage';

// types
import { IMessageItem } from 'chat/chatScreen/types/message';
import { RootState } from '@/common/redux/store';

// redux actions
import { save, remove } from '@/common/redux/reducers/savedMessage';

interface IBottomBarContainerProps {
  editMessageId: IMessageItem | null;
  setEditMessageId(msg: IMessageItem | null): void;
}

const BottomBarContainer: FC<IBottomBarContainerProps> = ({
  editMessageId,
  setEditMessageId,
}) => {
  // save current message when edit
  const dispatch = useDispatch();
  const savedMessage = useSelector((state: RootState) => state.messageText);
  const [messageToEdit, setMessageToEdit] = useState<string | null>(null);

  // current message
  const [message, setMessage] = useState<string | null>(null);
  const [media, setMedia] = useState<Image[] | null>(null);
  const { current: mediaIds } = useRef<string[]>([]);

  // onPress
  const onClipPress = useClipPressHandler(setMedia, mediaIds);
  const onEmojiPress = useEmojiPressHandler();
  const onSendPress = useSendPressHandler(
    message,
    setMessage,
    mediaIds,
    setMedia,
  );
  const onEditPressed = useEditMessage(
    messageToEdit,
    editMessageId?.id || null,
    setMessageToEdit,
    setEditMessageId,
  );

  useEffect(() => {
    if (editMessageId) {
      if (message) {
        dispatch(save(message));
      }
      setMessageToEdit(editMessageId.content.text);
    } else {
      dispatch(remove());
      if (savedMessage) {
        setMessage(savedMessage || '');
      }
    }
  }, [dispatch, editMessageId, message, savedMessage]);

  return editMessageId ? (
    <BottomBarView
      message={messageToEdit}
      media={media}
      onValueChange={setMessageToEdit}
      onClipPress={onClipPress}
      onEmojiPress={onEmojiPress}
      onSendPress={onEditPressed}
    />
  ) : (
    <BottomBarView
      message={message}
      media={media}
      onValueChange={setMessage}
      onClipPress={onClipPress}
      onEmojiPress={onEmojiPress}
      onSendPress={onSendPress}
    />
  );
};

export default memo(BottomBarContainer);
