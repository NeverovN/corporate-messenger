import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import { ID, Nullable, URL } from '../../types/common';
import { UserEntity } from '../User';

import { ChatSettings } from './types';

export const defaultUserSettings: ChatSettings = {
  notificationsEnabled: true,
};

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'chats', _id: true },
})
export class ChatEntity {
  id: ID;

  @prop()
  logo: Nullable<URL>;

  @prop({ required: true })
  participants: UserEntity[];

  @prop()
  messages: string[]; // just for now as there is no MessageEntity

  @prop()
  settings: ChatSettings;

  constructor(participants: UserEntity[]) {
    this.participants = participants;
    this.messages = [];
    this.settings = defaultUserSettings;
  }
}

const UserModel = getModelForClass(ChatEntity);

export default UserModel;
