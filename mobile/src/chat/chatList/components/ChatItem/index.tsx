import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import { useStyles } from './styles';

// components
import ChatLogo from '@/chat/chatList/components/ChatLogo';
import ChatInfo from 'chat/chatList/containers/ChatInfo';
import UnreadCount from '../UnreadCount';

export interface IChatItemViewProps {
  title?: string;
  logo: string | null;
  onPress(): void;
  chatId: string;
  count: number;
}

const ChatItemView: FC<IChatItemViewProps> = (props) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      style={styles.chatItemStyle}
      activeOpacity={0.7}
      onPress={props.onPress}>
      <ChatLogo logo={props.logo} />
      <ChatInfo chatId={props.chatId} />
      {props.count ? <UnreadCount count={props.count} /> : null}
    </TouchableOpacity>
  );
};

export default memo(ChatItemView);
