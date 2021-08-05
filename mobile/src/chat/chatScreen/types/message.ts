export interface IMessageItem {
  id: string;
  author: {
    id: string;
    name: string;
  };
  content: {
    text: string | null;
    media: Promise<string[]> | string[] | null;
    mediaCount: number;
  };
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;
}
