import React, { FC, memo } from 'react';
import { FlatList, View, Text, ListRenderItem } from 'react-native';

import UserItem from 'profile/containers/User';

// styles
import styles from './styles';

// types
import { IUserItem } from 'profile/types/user';
import { getUsername } from '@/profile/utils/getUsername';

interface IUserListViewProps {
  data: IUserItem[] | null;
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  const name = getUsername(item.firstName, item.lastName);
  return <UserItem userId={item.id} username={name} />;
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
