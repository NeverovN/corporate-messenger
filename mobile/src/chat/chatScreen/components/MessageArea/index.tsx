import React, { FC, memo } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';

// styles
import styles from './styles';

// types
import { IMessage } from 'chat/chatScreen/types/messages';

interface IMessageAreaViewProps {
  data: IMessage[] | null;
}

const renderMessage: ListRenderItem<IMessage> = ({ item }) => {
  return (
    <View>
      <Text>{item.content}</Text>
    </View>
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
