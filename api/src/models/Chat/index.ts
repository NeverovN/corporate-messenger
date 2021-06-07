import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import { ID, Nullable, URL } from '../../types/common';

export type MessageType = {
  _id: ID;
  author: ID;
};

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'chats', _id: true },
})
export class ChatEntity {
  _id: ID;

  @prop()
  logo: Nullable<URL>;

  @prop({ required: true })
  participants: ID[];

  @prop()
  messages: MessageType[];

  constructor(participants: ID[]) {
    this.participants = participants;
    this.messages = [];
  }
}

const UserModel = getModelForClass(ChatEntity);

export default UserModel;
