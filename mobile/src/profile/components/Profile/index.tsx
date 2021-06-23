import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import styles from './styles';

// containers
import MainTile from 'profile/containers/MainTile';

// components
import Tile from 'feed/components/Tile';

// types
import { IPostItem } from 'profile/types/post';

interface IProfileViewProps {
  data: Array<IPostItem>;
}

const renderPostItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      username={item.author}
      createdAt={item.createdAt}
      avatar={item.avatar}
      textContent={item.textContent}
    />
  );
};

const ProfileView: FC<IProfileViewProps> = (props) => {
  return (
    <View style={styles.profileStyle}>
      <FlatList
        ListHeaderComponent={MainTile}
        data={props.data}
        renderItem={renderPostItem}
      />
    </View>
  );
};

export default memo(ProfileView);
