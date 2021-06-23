import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// components
import SearchTopBar from '../SearchTopBar';
import ChatList from '../../containers/ChatList';

interface IChatSearchScreenViewProps {
  search(): void;
  filter: string;
  onChangeFilter(filter: string): void;
}

const ChatSearchScreen: FC<IChatSearchScreenViewProps> = (props) => {
  return (
    <View style={styles.chatSearchScreenStyle}>
      <SearchTopBar
        filter={props.filter}
        onChangeFilter={props.onChangeFilter}
        onPress={props.search}
      />
      <ChatList filter={props.filter} />
    </View>
  );
};

export default memo(ChatSearchScreen);
