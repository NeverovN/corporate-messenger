import React, { FC, memo, useEffect, useState } from 'react';

// components
import ChatScreenView from 'chat/chatScreen/components/ChatScreen';

// types
import { IMessageItem } from '../../types/message';
import { useNavigation } from '@react-navigation/native';
import ChatTitle from '../ChatTitle';

interface IChatScreenContainerProps {}

const ChatScreenContainer: FC<IChatScreenContainerProps> = () => {
  const [editMessage, setEditMessage] = useState<IMessageItem | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: () => <ChatTitle /> });
  }, [navigation]);
  return (
    <ChatScreenView editMessage={editMessage} setEditMessage={setEditMessage} />
  );
};

export default memo(ChatScreenContainer);
