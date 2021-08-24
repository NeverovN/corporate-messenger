export interface IPostItem {
  id: string;
  author: {
    id: string;
    name: string;
  };
  avatar: string | null;
  createdAt: string;
  textContent: string | null;
  mediaContent: string[] | null;
}
