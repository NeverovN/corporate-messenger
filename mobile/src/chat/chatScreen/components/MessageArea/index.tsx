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
import { IMessage } from 'chat/chatScreen/types/messages';

// containers
import Message from '@/chat/chatScreen/containers/Message';

interface IMessageAreaViewProps {
  data: IMessage[];
  onViewed: ViewabilityConfigCallbackPair[];
}

const renderMessage: ListRenderItem<IMessage> = ({ item }) => {
  return (
    <Message
      messageId={item.id}
      content={item.content}
      author={item.author}
      name={item.name}
      lastEdit={item.lastEdit}
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
