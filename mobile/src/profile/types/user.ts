export interface IUserItem {
  id: string;
  firstName: string;
  lastName: string;
  avatar: Promise<string | null> | string | null;
}
