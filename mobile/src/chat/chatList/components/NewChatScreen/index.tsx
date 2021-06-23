import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import NewChatTopBar from 'chat/chatList/components/NewChatTopBar';

// containers
import UserList from 'chat/chatList/containers/UserList';
import NewChatButton from 'chat/chatList/containers/NewChatButton';

interface INewChatScreenViewProp {
  search(): void;
  filter: string;
  onChangeFilter(filter: string): void;
}

const NewChatScreenView: FC<INewChatScreenViewProp> = (props) => {
  return (
    <View style={styles.newChatScreenStyle}>
      <NewChatTopBar
        onPress={props.search}
        filter={props.filter}
        onChangeFilter={props.onChangeFilter}
      />
      <NewChatButton />
      <UserList filter={props.filter} />
    </View>
  );
};

export default memo(NewChatScreenView);
