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

  @prop({ required: true })
  isDialog: boolean;

  @prop({ required: true })
  title: string;

  constructor(participants: ID[], title: string) {
    this.participants = participants;
    this.isDialog = participants.length === 2;
    this.title = title;
    this.logo = null;
  }
}

const UserModel = getModelForClass(ChatEntity);

export default UserModel;
