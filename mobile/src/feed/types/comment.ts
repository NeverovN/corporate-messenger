export interface ICommentItem {
  id: string;
  content: string;
  author: IAuthor;
  createdAt: string;
}

interface IAuthor {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
