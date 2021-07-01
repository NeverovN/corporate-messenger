export interface IChatItem {
  id: string;
  title: string;
  participants: string[];
  unreadCount: number;
  onPress(): void;
}
