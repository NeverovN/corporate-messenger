import React, { FC, memo } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  Image,
  Text,
} from 'react-native';

// containers
import NewChatSetupHeaderTile from '../../containers/NewChatSetupHeaderTile';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

interface INewChatSetupScreenViewProps {
  members: { name: string; avatar: string | null }[];
  createChat(): void;
  currentTitle: string;
  setCurrentTitle(currentTitle: string): void;
}

const renderItem: ListRenderItem<{ name: string; avatar: string | null }> = ({
  item,
  index,
}) => {
  return (
    <View key={index} style={styles.itemStyle}>
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

const NewChatSetupScreenView: FC<INewChatSetupScreenViewProps> = (props) => {
  return (
    <SafeAreaView style={styles.screenStyle}>
      <FlatList
        ListHeaderComponent={
          <NewChatSetupHeaderTile
            currentTitle={props.currentTitle}
            setCurrentTitle={props.setCurrentTitle}
          />
        }
        keyExtractor={() => Math.random().toString()}
        data={props.members}
        renderItem={renderItem}
        style={styles.flatListStyle}
      />
      <TextButton
        label="CREATE CHAT"
        labelStyle={styles.buttonLabelStyle}
        containerStyle={styles.buttonContainerStyle}
        onPress={props.createChat}
      />
    </SafeAreaView>
  );
};

export default memo(NewChatSetupScreenView);
