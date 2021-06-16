import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

import UserItem from 'chat/chatList/containers/UserItem';

// styles
import styles from './styles';

// types
import { IUserItem } from 'profile/types/user';

interface IUserListViewProps {
  data: IUserItem[] | [];
}

const renderChatItem: ListRenderItem<IUserItem> = ({ item }) => {
  return <UserItem userId={item.id} />;
};

const UserListView: FC<IUserListViewProps> = (props) => {
  return (
    <View style={styles.usersStyle}>
      <FlatList renderItem={renderChatItem} data={props.data} />
    </View>
  );
};

export default memo(UserListView);
