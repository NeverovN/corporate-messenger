import React, { FC, memo } from 'react';
import {
  FlatList,
  View,
  Text,
  ListRenderItem,
  RefreshControl,
  ScrollView,
} from 'react-native';

import UserItem from 'profile/containers/User';

// styles
import { useStyles } from './styles';

// types
import { IUserItem } from 'profile/types/user';

interface IFriendListViewProps {
  data: IUserItem[] | null;
  refresh(): void;
  loading: boolean;
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  return <UserItem image={item.avatar} userId={item.id} />;
};

const FriendListView: FC<IFriendListViewProps> = ({
  data,
  refresh,
  loading,
}) => {
  const styles = useStyles();
  const isSomeUsers = !!data;

  if (isSomeUsers) {
    return (
      <View style={styles.existingUsersStyle}>
        <FlatList
          renderItem={renderChatItem}
          data={data}
          onRefresh={refresh}
          refreshing={loading}
        />
      </View>
    );
  } else {
    return (
      <ScrollView
        contentContainerStyle={styles.absentUsersStyle}
        refreshControl={
          <RefreshControl onRefresh={refresh} refreshing={loading} />
        }>
        <Text style={styles.textStyle}>No friends found :(</Text>
      </ScrollView>
    );
  }
};

export default memo(FriendListView);
