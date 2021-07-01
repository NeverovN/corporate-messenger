import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

// components
import UserImage from 'chat/chatList/components/UserImage';
import ChatInfo from 'chat/chatList/containers/ChatInfo';
import UnreadCount from '../UnreadCount';

export interface IChatItemViewProps {
  title?: string;
  onPress(): void;
  chatId: string;
  count: number;
}

const ChatItemView: FC<IChatItemViewProps> = (props) => {
  return (
    <TouchableOpacity
      style={styles.chatItemStyle}
      activeOpacity={0.7}
      onPress={props.onPress}>
      <UserImage />
      <ChatInfo chatId={props.chatId} />
      {props.count ? <UnreadCount count={props.count} /> : null}
    </TouchableOpacity>
  );
};

export default memo(ChatItemView);
