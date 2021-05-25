import { Column } from 'typeorm';
import { ID } from '../../types/common';

export class UserSettings {
  @Column()
  notificationsEnabled: boolean;

  @Column()
  banlist: Array<ID>;
  // ... etc.

  constructor() {
    this.notificationsEnabled = false;
    this.banlist = [];
  }
}
