import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import styles from './styles';

// containers
import MainTile from 'profile/containers/MainTile';

// components
import Tile from 'feed/components/Tile';

// types
import { IPostItem } from 'feed/types/feed';

interface IProfileViewProps {
  data: Array<IPostItem>;
}

const renderPostItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      author={item.author}
      postId={item.id}
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
        ListFooterComponent={MainTile}
        data={props.data}
        renderItem={renderPostItem}
        inverted={true}
      />
    </View>
  );
};

export default memo(ProfileView);
