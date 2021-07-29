import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// components
import TopBarContainer from 'chat/chatList/containers/TopBar';
import ChatList from 'chat/chatList/containers/ChatList';

interface IChatComponentProps {}

const ChatView: FC<IChatComponentProps> = () => {
  return (
    <View style={styles.chatStyle}>
      <TopBarContainer />
      <ChatList />
    </View>
  );
};

export default memo(ChatView);
