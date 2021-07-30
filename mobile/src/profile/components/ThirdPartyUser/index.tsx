import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

// styles
import styles from './styles';

// containers
import { IPostItem } from '@/feed/types/feed';

// components
import Tile from 'feed/components/Tile';
import ThirdPartyTile from '../ThirdPartyTile';

interface IThirdPartyUserViewProps {
  data: IPostItem[];
  userImage: string | null;
}

const renderPostItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      author={item.author}
      id={item.id}
      createdAt={item.createdAt}
      textContent={item.textContent}
      mediaContent={item.mediaContent}
      avatar={item.avatar}
    />
  );
};

const ThirdPartyUserView: FC<IThirdPartyUserViewProps> = (props) => {
  return (
    <View style={styles.thirdPartyUserStyle}>
      <FlatList
        ListHeaderComponent={<ThirdPartyTile image={props.userImage} />}
        data={props.data}
        renderItem={renderPostItem}
      />
    </View>
  );
};

export default memo(ThirdPartyUserView);
