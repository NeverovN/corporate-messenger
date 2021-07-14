import { IMessageItem } from '@/chat/chatScreen/types/message';

export interface IChatItem {
  id: string;
  title: string;
  participants: string[];
  unreadCount: number;
  messages: IMessageItem[];
  onPress(): void;
}
