export interface IMessageItem {
  id: string;
  author: {
    id: string;
    name: string;
  };
  content: string;
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;
}
