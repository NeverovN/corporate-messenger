export interface IMessageItem {
  id: string;
  author: {
    id: string;
    name: string;
  };
  content: {
    text: string | null;
    media: Promise<string[]> | null;
  };
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;
}
