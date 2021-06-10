import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

import ChatItem from 'chat/chatList/containers/ChatItem';

// styles
import styles from './styles';

// types
import { IChatItem } from 'chat/chatList/types/chat';

interface IChatListViewProps {
  data: IChatItem[];
}

const renderChatItem: ListRenderItem<IChatItem> = ({ item }) => {
  return <ChatItem chatId={item.id} />;
};

const ChatListView: FC<IChatListViewProps> = (props) => {
  return (
    <View style={styles.chatsStyle}>
      <FlatList renderItem={renderChatItem} data={props.data} />
    </View>
  );
};

export default memo(ChatListView);
