import { DocumentType } from '@typegoose/typegoose';

import { ChatEntity } from './index';

export type ChatSettings = {
  notificationsEnabled: boolean;
  // ... etc.
};

export type ChatDocument = DocumentType<ChatEntity>;
