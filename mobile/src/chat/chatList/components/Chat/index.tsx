import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { useStyles } from './styles';

// components
import TopBarContainer from 'chat/chatList/containers/TopBar';
import ChatList from 'chat/chatList/containers/ChatList';

interface IChatComponentProps {
  filter: string;
  setFilter(filter: string): void;
}

const ChatView: FC<IChatComponentProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.chatStyle}>
      <TopBarContainer setFilter={props.setFilter} />
      <ChatList filter={props.filter} />
    </View>
  );
};

export default memo(ChatView);
