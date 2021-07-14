export interface IMessageItem {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;
  name: string;
}
