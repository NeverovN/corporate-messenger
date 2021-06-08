import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

// styles
import styles from './styles';

// types
import { IMessage } from 'chat/chatScreen/types/messages';

// components
import MessageView from '../Message';

interface IMessageAreaViewProps {
  data: IMessage[];
}

const renderMessage: ListRenderItem<IMessage> = ({ item }) => {
  return <MessageView onPress={item.onPress} content={item.content} />;
};

const MessageAreaView: FC<IMessageAreaViewProps> = (props) => {
  return (
    <View style={styles.messageAreaStyle}>
      <FlatList renderItem={renderMessage} data={props.data} />
    </View>
  );
};

export default memo(MessageAreaView);
