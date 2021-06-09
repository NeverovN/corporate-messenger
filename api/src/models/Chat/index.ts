import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import { ID, Nullable, URL } from '../../types/common';

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
  messages: ID[];

  constructor(participants: ID[]) {
    this.participants = participants;
    this.logo = null;
    this.messages = [];
  }
}

const UserModel = getModelForClass(ChatEntity);

export default UserModel;
