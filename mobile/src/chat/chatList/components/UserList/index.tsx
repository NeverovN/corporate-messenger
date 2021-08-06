import React, { FC, memo } from 'react';
import { FlatList, SafeAreaView, ListRenderItem, Text } from 'react-native';

import UserItem from 'chat/chatList/containers/UserItem';

// styles
import styles from './styles';

// types
import { IUserItem } from 'profile/types/user';

// containers
import NewChatButton from 'chat/chatList/containers/NewChatButton';

interface IUserListViewProps {
  data: Array<IUserItem> | null;
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  return <UserItem image={item.avatar} userId={item.id} />;
};

const UserListView: FC<IUserListViewProps> = ({ data }) => {
  const isSomeUsers = !!data;

  if (isSomeUsers) {
    return (
      <SafeAreaView style={styles.existingUsersStyle}>
        <FlatList
          keyExtractor={() => Math.random().toString()}
          renderItem={renderChatItem}
          data={data}
        />
        <NewChatButton />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.absentUsersStyle}>
        <Text style={styles.textStyle}>Nothing has found :(</Text>
      </SafeAreaView>
    );
  }
};

export default memo(UserListView);
