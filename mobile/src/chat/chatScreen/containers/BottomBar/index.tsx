import React, { FC, memo, useState } from 'react';

interface IBottomBarContainerProps {}

// components
import BottomBarView from 'chat/chatScreen/components/BottomBar';

// hooks
import { useClipPressHandler } from 'chat/chatScreen/hooks/useClipPressHandler';
import { useEmojiPressHandler } from 'chat/chatScreen/hooks/useEmojiPressHandler';
import { useSendPressHandler } from 'chat/chatScreen/hooks/useSendPressHandler';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from 'app/types/routes';

const BottomBarContainer: FC<IBottomBarContainerProps> = () => {
  const [message, setMessage] = useState<string>('');
  const onClipPress = useClipPressHandler();
  const onEmojiPress = useEmojiPressHandler();
  const { params } = useRoute<ChatRouteProp>(); // returns undefined anyway
  const onSendPress = useSendPressHandler(message, params?.chatId);

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
