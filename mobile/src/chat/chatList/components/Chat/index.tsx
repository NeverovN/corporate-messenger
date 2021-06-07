import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// components
import TopBarView from '../TopBar';
import ChatList from 'chat/chatList/containers/ChatList';

interface IChatComponentProps {}

const ChatView: FC<IChatComponentProps> = () => {
  return (
    <View style={styles.chatStyle}>
      <TopBarView />
      <ChatList />
    </View>
  );
};

export default memo(ChatView);
