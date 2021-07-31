import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem, Image, Text } from 'react-native';

// styles
import styles from './styles';

// components
import ChatPreferencesHeaderTile from 'chat/chatScreen/containers/ChatPreferencesHeaderTile';

interface IChatPrefScreenViewProps {
  members: { name: string; avatar: string | null }[];
}

const renderItem: ListRenderItem<{ name: string; avatar: string | null }> = ({
  item,
  // index,
}) => {
  return (
    <View style={styles.itemStyle}>
      {item.avatar ? (
        <Image style={styles.imageStyle} source={{ uri: item.avatar }} />
      ) : (
        <Image
          style={styles.imageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
      <Text style={styles.nameStyle}>{item.name}</Text>
    </View>
  );
};

const ChatPrefScreenView: FC<IChatPrefScreenViewProps> = (props) => {
  return (
    <View style={styles.screenStyle}>
      <FlatList
        keyExtractor={() => Math.random().toString()}
        ListHeaderComponent={ChatPreferencesHeaderTile}
        data={props.members}
        renderItem={renderItem}
        style={styles.flatListStyle}
      />
    </View>
  );
};

export default memo(ChatPrefScreenView);
