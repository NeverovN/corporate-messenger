export interface IPostItem {
  id: string;
  author: {
    id: string;
    name: string;
  };
  avatar: Promise<string | null> | string | null;
  createdAt: string;
  textContent: string | null;
  mediaContent: string[] | null;
}
