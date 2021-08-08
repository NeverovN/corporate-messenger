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
import { useStyles } from './styles';
import UserTile from '@/chat/chatScreen/components/UserTile';

interface INewChatSetupScreenViewProps {
  members: { name: string; avatar: string | null }[];
  createChat(): void;
  currentTitle: string;
  setCurrentTitle(currentTitle: string): void;
}

const renderItem: ListRenderItem<{ name: string; avatar: string | null }> = ({
  item,
}) => {
  return <UserTile avatar={item.avatar} name={item.name} />;
};

const NewChatSetupScreenView: FC<INewChatSetupScreenViewProps> = (props) => {
  const styles = useStyles();
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
