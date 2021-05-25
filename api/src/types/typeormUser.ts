import { Entity, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  guid: string;

  @Column()
  username: string;

  @Column()
  password: string;

  constructor() {
    super();
    this.guid = new ObjectID().toHexString();
    this.username = String();
    this.password = String();
  }
}
