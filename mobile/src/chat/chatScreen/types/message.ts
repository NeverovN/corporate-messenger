export interface IMessageItem {
  id: string;
  author: {
    id: string;
    name: string;
  };
  content: {
    text: string | null;
    media: string[] | null;
  };
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;
}
