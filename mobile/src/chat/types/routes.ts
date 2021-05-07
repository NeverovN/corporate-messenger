import { StackNavigationProp } from '@react-navigation/stack';
import { CHAT_STACK_NAME } from 'chat/constants/routes';

export type ChatListStackParamList = {
  [CHAT_STACK_NAME]: undefined;
};

export type ChatScreenNavigationProp = StackNavigationProp<
  ChatListStackParamList,
  typeof CHAT_STACK_NAME
>;
