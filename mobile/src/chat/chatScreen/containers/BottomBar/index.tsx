import React, { FC, memo, useState } from 'react';

interface IBottomBarContainerProps {}

// components
import BottomBarView from 'chat/chatScreen/components/BottomBar';

// hooks
import { useClipPressHandler } from 'chat/chatScreen/hooks/useClipPressHandler';
import { useEmojiPressHandler } from 'chat/chatScreen/hooks/useEmojiPressHandler';
import { useSendPressHandler } from 'chat/chatScreen/hooks/useSendPressHandler';

const BottomBarContainer: FC<IBottomBarContainerProps> = () => {
  const [message, setMessage] = useState<string>('');
  const [media, setMedia] = useState<any>(null);
  const onClipPress = useClipPressHandler(setMedia);
  const onEmojiPress = useEmojiPressHandler();
  const onSendPress = useSendPressHandler(message, setMessage);

  return (
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
