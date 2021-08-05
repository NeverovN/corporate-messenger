import { IMessageItem } from '@/chat/chatScreen/types/message';

export interface IChatItem {
  id: string;
  title: string;
  logo: Promise<string | null> | string | null;
  participants: string[];
  unreadCount: number;
  messages: IMessageItem[];
  onPress(): void;
}
