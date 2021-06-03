import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import { ID, Nullable, URL } from '../../types/common';

import { UserSettings } from './types';

export const defaultUserSettings: UserSettings = {
  notificationsEnabled: true,
  banlist: [],
};

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'users', _id: true },
})
export class UserEntity {
  id: string;

  @prop({ required: true })
  email: string;

  @prop({ required: true })
  password: string;

  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop()
  avatar: Nullable<URL>;

  @prop({ ref: () => UserEntity })
  friends: Array<ID>;

  @prop({ required: true })
  settings: UserSettings;

  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar: Nullable<URL>,
  ) {
    this.email = email;
    this.password = password;

    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    // default data
    this.friends = [];
    this.settings = defaultUserSettings;
  }
}

const UserModel = getModelForClass(UserEntity);

export default UserModel;
