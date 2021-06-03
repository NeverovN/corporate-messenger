import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import BottomBar from 'chat/chatScreen/containers/BottomBar';
import MessageArea from 'chat/chatScreen/containers/MessageArea';

interface IChatScreenViewProps {}

const ChatScreenView: FC<IChatScreenViewProps> = () => {
  return (
    <View style={styles.chatScreenStyle}>
      <MessageArea />
      <BottomBar />
    </View>
  );
};

export default memo(ChatScreenView);
