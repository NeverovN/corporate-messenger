export interface IChatItem {
  id: string;
  title: string;
  participants: string[];
  unreadCount: number;
  lastMsg: {
    date: string;
  };
  onPress(): void;
}
