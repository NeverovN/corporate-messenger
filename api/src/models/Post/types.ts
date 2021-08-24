import { DocumentType } from '@typegoose/typegoose';
import { PostEntity } from './index';

export type PostDocument = DocumentType<PostEntity>;
