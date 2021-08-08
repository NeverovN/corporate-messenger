import React, { FC, memo } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';

// styles
import { useStyles } from './styles';

// containers
import BottomBar from 'chat/chatScreen/containers/BottomBar';
import MessageArea from 'chat/chatScreen/containers/MessageArea';
import { IMessageItem } from '../../types/message';

interface IChatScreenViewProps {
  editMessage: IMessageItem | null;
  setEditMessage(msg: IMessageItem | null): void;
}

const ChatScreenView: FC<IChatScreenViewProps> = (props) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.chatScreenStyle}>
      <KeyboardAvoidingView
        style={styles.chatScreenStyle}
        behavior="padding"
        enabled
        keyboardVerticalOffset={65}>
        <MessageArea setEditMessage={props.setEditMessage} />
        <BottomBar
          editMessageId={props.editMessage}
          setEditMessageId={props.setEditMessage}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(ChatScreenView);
