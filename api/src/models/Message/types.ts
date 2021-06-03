import { DocumentType } from '@typegoose/typegoose';
import { MessageEntity } from './index';

export type MessageDocument = DocumentType<MessageEntity>;
