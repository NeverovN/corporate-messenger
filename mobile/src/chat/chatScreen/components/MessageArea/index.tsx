import React, { FC, memo, useRef } from 'react';
import {
  View,
  FlatList,
  ListRenderItem,
  ViewabilityConfigCallbackPair,
} from 'react-native';

// styles
import styles from './styles';

// types
import { IMessageItem } from '@/chat/chatScreen/types/message';

// containers
import Message from '@/chat/chatScreen/containers/Message';

interface IMessageAreaViewProps {
  data: Array<
    IMessageItem & {
      currentUserId: string;
      setEditMessage(msg: IMessageItem | null): void;
    }
  >;
  onViewed: ViewabilityConfigCallbackPair[];
}

const renderMessage: ListRenderItem<
  IMessageItem & {
    currentUserId: string;
    setEditMessage(msg: IMessageItem | null): void;
  }
> = ({ item }) => {
  return (
    <Message
      setMessageEdit={item.setEditMessage}
      currentUserId={item.currentUserId}
      id={item.id}
      content={item.content}
      author={item.author}
      lastEdit={item.lastEdit}
      isRead={item.isRead}
      createdAt={item.createdAt}
    />
  );
};

const MessageAreaView: FC<IMessageAreaViewProps> = (props) => {
  const view = useRef(props.onViewed);

  return (
    <View style={styles.messageAreaStyle}>
      <FlatList
        renderItem={renderMessage}
        data={props.data}
        inverted={true}
        viewabilityConfigCallbackPairs={view.current}
      />
    </View>
  );
};

export default memo(MessageAreaView);
