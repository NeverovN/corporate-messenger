import { DocumentType } from '@typegoose/typegoose';
import { ID } from '../../types/common';

import { UserEntity } from './index';

export type UserSettings = {
  notificationsEnabled: boolean;
  banlist: Array<ID>;
  // ... etc.
};

export type UserDocument = DocumentType<UserEntity>;
