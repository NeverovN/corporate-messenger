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

  @prop()
  title: string | null;

  @prop({ required: true })
  createdAt: string;

  constructor(participants: ID[], isDialog: boolean, title: string | null) {
    this.participants = participants;
    this.isDialog = isDialog;
    this.title = title;
    this.logo = null;
    this.createdAt = new Date().toString();
  }
}

const UserModel = getModelForClass(ChatEntity);

export default UserModel;
