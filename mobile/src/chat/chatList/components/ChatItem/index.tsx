import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

// components
import UserImage from 'chat/chatList/components/UserImage';
import ChatInfo from 'chat/chatList/containers/ChatInfo';
import { useMessageEditedSubscription } from '@/common/types/gql.generated';

export interface IChatItemViewProps {
  title?: string;
  onPress(): void;
  chatId: string;
}

const ChatItemView: FC<IChatItemViewProps> = (props) => {
  useMessageEditedSubscription({ variables: { chatId: props.chatId } });
  return (
    <TouchableOpacity
      style={styles.chatItemStyle}
      activeOpacity={0.7}
      onPress={props.onPress}>
      <UserImage />
      <ChatInfo chatId={props.chatId} />
    </TouchableOpacity>
  );
};

export default memo(ChatItemView);
