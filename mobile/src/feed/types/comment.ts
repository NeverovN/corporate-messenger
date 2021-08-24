export interface ICommentItem {
  id: string;
  content: string | null;
  author: IAuthor;
  createdAt: string;
}

interface IAuthor {
  id: string;
  name: string;
  avatar: string | null;
}
