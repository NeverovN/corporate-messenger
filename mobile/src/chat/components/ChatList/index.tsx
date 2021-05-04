import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IChatListComponentProps {}

const ChatListView: FC<IChatListComponentProps> = () => {
  return (
    <View style={styles.chatListStyle}>
      <Text>Chat List Screen</Text>
    </View>
  );
};

export default memo(ChatListView);
