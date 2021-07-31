import React, { FC, memo } from 'react';
import { FlatList, View, Text, ListRenderItem } from 'react-native';

import UserItem from 'profile/containers/User';

// styles
import styles from './styles';

// types
import { IUserItem } from 'profile/types/user';

interface IUserListViewProps {
  data: IUserItem[] | null;
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  return <UserItem image={item.avatar} userId={item.id} />;
};

const UserListView: FC<IUserListViewProps> = ({ data }) => {
  const isSomeUsers = !!data;

  if (isSomeUsers) {
    return (
      <View style={styles.existingUsersStyle}>
        <FlatList renderItem={renderChatItem} data={data} />
      </View>
    );
  } else {
    return (
      <View style={styles.absentUsersStyle}>
        <Text style={styles.textStyle}>Nothing has found :(</Text>
      </View>
    );
  }
};

export default memo(UserListView);
