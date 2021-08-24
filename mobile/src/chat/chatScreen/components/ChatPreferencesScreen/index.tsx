import React, { FC, memo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

// styles
import { useStyles } from './styles';

// components
import ChatPreferencesHeaderTile from 'chat/chatScreen/containers/ChatPreferencesHeaderTile';
import UserTile from '../UserTile';

interface IChatPrefScreenViewProps {
  members: { name: string; avatar: string | null }[];
}

const renderItem: ListRenderItem<{ name: string; avatar: string | null }> = ({
  item,
}) => {
  return <UserTile avatar={item.avatar} name={item.name} />;
};

const ChatPrefScreenView: FC<IChatPrefScreenViewProps> = (props) => {
  const styles = useStyles();
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
