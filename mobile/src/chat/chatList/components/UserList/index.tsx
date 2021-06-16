import React, { FC, memo, useEffect, useState } from 'react';
import { FlatList, View, ListRenderItem, Text } from 'react-native';

import UserItem from 'chat/chatList/containers/UserItem';

// styles
import styles from './styles';

// types
import { IUserItem } from 'profile/types/user';

interface IUserListViewProps {
  data: Array<IUserItem | undefined>;
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  return <UserItem userId={item.id} />;
};

const UserListView: FC<IUserListViewProps> = ({ data }) => {
  const [isSomeUsers, setIsSomeUsers] = useState<boolean>(!!data);

  useEffect(() => {
    if (data.length === 0) {
      setIsSomeUsers(false);
    } else {
      setIsSomeUsers(true);
    }
  }, [data]);

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
