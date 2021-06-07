import { DocumentType } from '@typegoose/typegoose';

import { ChatEntity } from './index';

export type ChatDocument = DocumentType<ChatEntity>;
