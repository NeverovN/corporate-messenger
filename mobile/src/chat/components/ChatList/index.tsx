import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

import ChatItem from '@/chat/components/ChatItem';

// styles
import styles from './styles';

// types
import { IChatItem } from 'chat/types/chat';

interface IChatListViewProps {
  data: IChatItem[];
}

const renderChatItem: ListRenderItem<IChatItem> = ({ item }) => {
  return <ChatItem onPress={item.onPress} />;
};

const ChatListView: FC<IChatListViewProps> = (props) => {
  return (
    <View style={styles.chatsStyle}>
      <FlatList renderItem={renderChatItem} data={props.data} />
    </View>
  );
};

export default memo(ChatListView);
