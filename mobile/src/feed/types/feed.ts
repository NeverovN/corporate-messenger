export interface IPostItem {
  id: string;
  author: {
    id: string;
    name: string;
  };
  avatar: string;
  createdAt: string;
  textContent: string;
  mediaContent: string[];
}
