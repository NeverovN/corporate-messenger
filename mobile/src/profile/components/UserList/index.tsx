import React, { FC, memo } from 'react';
import { FlatList, View, Text, ListRenderItem } from 'react-native';

import UserItem from 'profile/containers/User';

// styles
import { useStyles } from './styles';

// types
import { IUserItem } from 'profile/types/user';

interface IUserListViewProps {
  data: IUserItem[] | null;
  onRefresh(): void;
  refreshing: boolean;
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  return <UserItem image={item.avatar} userId={item.id} />;
};

const UserListView: FC<IUserListViewProps> = ({
  data,
  onRefresh,
  refreshing,
}) => {
  const styles = useStyles();
  const isSomeUsers = !!data;

  console.log(refreshing);

  if (isSomeUsers) {
    return (
      <View style={styles.existingUsersStyle}>
        <FlatList
          renderItem={renderChatItem}
          data={data}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
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
