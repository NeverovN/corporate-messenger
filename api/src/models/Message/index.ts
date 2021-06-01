import { ID } from '../../types/common';

import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';

// eslint-disable-next-line @typescript-eslint/ban-types
type MessageMedia = {};

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'messages', _id: true },
})
export class MessageEntity {
  id: string;

  @prop({ required: true })
  author: ID;

  @prop({ required: true })
  receivers: ID[];

  @prop({ required: true })
  content: string;

  @prop({ required: true })
  createdAt: string;

  @prop()
  lastEdit: string;

  @prop()
  media: Array<MessageMedia>;

  constructor(author: ID, receivers: ID[], content: string) {
    this.author = author;
    this.receivers = receivers;
    this.content = content;
    this.createdAt = new Date().toString();
  }
}

const MessageModel = getModelForClass(MessageEntity);

export default MessageModel;
