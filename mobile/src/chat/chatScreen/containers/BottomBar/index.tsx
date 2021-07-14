import React, { FC, memo, useEffect, useState } from 'react';
import { ImageOrVideo } from 'react-native-image-crop-picker';

interface IBottomBarContainerProps {}

// components
import BottomBarView from 'chat/chatScreen/components/BottomBar';

// hooks
import { useClipPressHandler } from 'chat/chatScreen/hooks/useClipPressHandler';
import { useEmojiPressHandler } from 'chat/chatScreen/hooks/useEmojiPressHandler';
import { useSendPressHandler } from 'chat/chatScreen/hooks/useSendPressHandler';
import { editingMessage, editMessageMode } from '@/common/cache/cache';

const BottomBarContainer: FC<IBottomBarContainerProps> = () => {
  const [message, setMessage] = useState<string>('');
  const [media, setMedia] = useState<ImageOrVideo[]>([]);
  const onClipPress = useClipPressHandler(setMedia);
  const onEmojiPress = useEmojiPressHandler();
  const onSendPress = useSendPressHandler(message, setMessage);

  const editMode = editMessageMode();

  useEffect(() => console.log('aaa'), [editMode]);
  return true ? (
    <BottomBarView
      value={editingMessage().content}
      onValueChange={setMessage}
      onClipPress={onClipPress}
      onEmojiPress={onEmojiPress}
      onSendPress={() => console.log('send pressed')}
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
