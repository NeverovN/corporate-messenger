export interface IMessage {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  lastEdit: string | null;
  isRead: boolean;
  name: string;
}
