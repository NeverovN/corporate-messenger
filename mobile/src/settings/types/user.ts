export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  friends: Array<string>;
}
