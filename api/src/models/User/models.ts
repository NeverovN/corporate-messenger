import { ID } from '../../types/common';

export type UserSettings = {
  notificationsEnabled: boolean;
  banlist: Array<ID>;
  // ... etc.
};

export const defaultUserSettings: UserSettings = {
  notificationsEnabled: true,
  banlist: [],
};
