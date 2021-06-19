import React, { FC, memo } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';

// styles
import styles from './styles';

// containers
import BottomBar from 'chat/chatScreen/containers/BottomBar';
import MessageArea from 'chat/chatScreen/containers/MessageArea';

interface IChatScreenViewProps {}

const ChatScreenView: FC<IChatScreenViewProps> = () => {
  return (
    <SafeAreaView style={styles.chatScreenStyle}>
      <KeyboardAvoidingView
        style={styles.chatScreenStyle}
        behavior="padding"
        enabled
        keyboardVerticalOffset={65}>
        <MessageArea />
        <BottomBar />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(ChatScreenView);
