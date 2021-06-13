import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

// styles
import styles from './styles';

// types
import { IMessage } from 'chat/chatScreen/types/messages';

// containers
import Message from '@/chat/chatScreen/containers/Message';

interface IMessageAreaViewProps {
  data: IMessage[];
}

const renderMessage: ListRenderItem<IMessage> = ({ item }) => {
  return (
    <Message messageId={item.id} content={item.content} author={item.author} />
  );
};

const MessageAreaView: FC<IMessageAreaViewProps> = (props) => {
  return (
    <View style={styles.messageAreaStyle}>
      <FlatList renderItem={renderMessage} data={props.data} />
    </View>
  );
};

export default memo(MessageAreaView);
