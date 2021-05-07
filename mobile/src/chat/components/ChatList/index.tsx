import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// components
import TopBarView from '../TopBar';
import Chats from 'chat/containers/Chats';

interface IChatListComponentProps {}

const ChatListView: FC<IChatListComponentProps> = () => {
  return (
    <View style={styles.chatListStyle}>
      <TopBarView />
      <Chats />
    </View>
  );
};

export default memo(ChatListView);
