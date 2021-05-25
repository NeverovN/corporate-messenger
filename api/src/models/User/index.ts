import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ID, URL } from '../../types/common';

import { UserSettings } from './models';

@Entity()
export class UserModel {
  @ObjectIdColumn()
  id: ID;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: URL;

  @Column()
  friends: Array<ID>;

  @Column(() => UserSettings)
  settings: UserSettings;

  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar?: string,
  ) {
    const userAvatar = this.createUserAvatar(avatar);
    this.initRequiredData(email, password, firstName, lastName, userAvatar);
  }

  private initRequiredData(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar: string,
  ): void {
    // this.id = ''; //! FIX THIS

    this.email = email;
    this.password = password;

    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    // default data
    this.friends = [];
    this.settings = new UserSettings();
  }

  private createUserAvatar(avatar?: string): string {
    if (avatar) return avatar;

    return 'default avatar'; // TODO: return default user picture or set null (depends on business rules)
  }
}
