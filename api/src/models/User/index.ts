import { ID, URL } from '../../types/common';

type UserSettings = {
  notificationsEnabled: boolean;
  // ... etc.
};

type NewType = {
  id: ID;
  avatar: URL; // optional to use URL
  friends: Array<ID>;
  firstName: string;
  lastName: string;
  settings: UserSettings;
};

export type UserModel = NewType;
