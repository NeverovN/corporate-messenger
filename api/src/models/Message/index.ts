import { ID } from '../../types/common';

import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';

import { CreateMessageInput } from '../../types/gql.generated';

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'messages', _id: true },
})
export class MessageEntity {
  _id: string;

  @prop({ required: true })
  author: ID;

  @prop({ required: true })
  chatId: ID;

  @prop()
  text: string | null;

  @prop({ required: true })
  createdAt: string;

  @prop()
  readBy: ID[];

  @prop()
  lastEdit: string;

  @prop()
  media: string[] | null;

  constructor(
    author: ID,
    chatId: string,
    text: string | null,
    media: string[] | null,
  ) {
    this.author = author;
    this.readBy = [];
    this.chatId = chatId;
    this.text = text;
    this.media = media;
    this.createdAt = new Date().toString();
  }
}

const MessageModel = getModelForClass(MessageEntity);

export default MessageModel;
