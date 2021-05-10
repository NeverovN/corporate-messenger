import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

import ChatItem from '@/chat/components/ChatItem';

// styles
import styles from './styles';

interface IChatItem {
  guid: string;
  title: string;
  users: any[];
}

interface IChatsViewProps {
  data: IChatItem[];
}

const renderChatItem: ListRenderItem<IChatItem> = ({ item }) => {
  return <ChatItem title={item.title} />;
};

const ChatView: FC<IChatsViewProps> = (props) => {
  return (
    <View style={styles.chatsStyle}>
      <FlatList renderItem={renderChatItem} data={props.data} />
    </View>
  );
};

export default memo(ChatView);
