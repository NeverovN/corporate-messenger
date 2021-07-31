import React, { FC, memo } from 'react';
import { FlatList, View, Text, ListRenderItem } from 'react-native';

import UserItem from 'profile/containers/User';

// styles
import styles from './styles';

// types
import { IUserItem } from 'profile/types/user';

interface IFriendListViewProps {
  data: IUserItem[] | null;
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  return <UserItem image={item.avatar} userId={item.id} />;
};

const FriendListView: FC<IFriendListViewProps> = ({ data }) => {
  const isSomeUsers = !!data;

  if (isSomeUsers) {
    return (
      <View>
        <FlatList
          style={styles.existingUsersStyle}
          renderItem={renderChatItem}
          data={data}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.absentUsersStyle}>
        <Text style={styles.textStyle}>No friends found :(</Text>
      </View>
    );
  }
};

export default memo(FriendListView);
