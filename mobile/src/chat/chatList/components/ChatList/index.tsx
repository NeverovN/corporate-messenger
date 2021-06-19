import React, { FC, memo, useEffect, useState } from 'react';
import { FlatList, View, ListRenderItem, Text } from 'react-native';

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

const ChatListView: FC<IChatListViewProps> = ({ data }) => {
  const isAnyChats = !!data.length;

  if (isAnyChats) {
    return (
      <View style={styles.existingChatsStyle}>
        <FlatList renderItem={renderChatItem} data={data} />
      </View>
    );
  } else {
    return (
      <View style={styles.missingChatsStyle}>
        <Text style={styles.textStyle}>No chats found :(</Text>
      </View>
    );
  }
};

export default memo(ChatListView);
