import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import { ID, Nullable, URL } from '../../types/common';

import { ChatSettings } from './types';

export const defaultUserSettings: ChatSettings = {
  notificationsEnabled: true,
};

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

  @prop()
  settings: ChatSettings;

  constructor(participants: ID[]) {
    this.participants = participants;
    this.messages = [];
    this.settings = defaultUserSettings;
  }
}

const UserModel = getModelForClass(ChatEntity);

export default UserModel;
