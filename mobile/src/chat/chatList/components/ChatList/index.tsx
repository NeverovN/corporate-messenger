import React, { FC, memo } from 'react';
import {
  FlatList,
  View,
  ListRenderItem,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

import ChatItem from 'chat/chatList/containers/ChatItem';

// styles
import { useStyles } from './styles';

// types
import { IChatItem } from 'chat/chatList/types/chat';

interface IChatListViewProps {
  data: IChatItem[];
  refresh(): void;
  loading: boolean;
}

const renderChatItem: ListRenderItem<IChatItem> = ({ item }) => {
  return (
    <ChatItem
      logo={item.logo}
      chatId={item.id}
      unreadCount={item.unreadCount}
    />
  );
};

const ChatListView: FC<IChatListViewProps> = ({ data, refresh, loading }) => {
  const styles = useStyles();
  const isAnyChats = !!data.length;

  if (isAnyChats) {
    return (
      <View style={styles.existingChatsStyle}>
        <FlatList
          renderItem={renderChatItem}
          data={data}
          onRefresh={refresh}
          refreshing={loading}
        />
      </View>
    );
  } else {
    return (
      <ScrollView
        contentContainerStyle={styles.missingChatsStyle}
        refreshControl={
          <RefreshControl onRefresh={refresh} refreshing={loading} />
        }>
        <Text style={styles.textStyle}>No chats or data is refreshing</Text>
      </ScrollView>
    );
  }
};

export default memo(ChatListView);
