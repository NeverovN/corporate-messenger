import { Entity, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity()
export class Post extends BaseEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  comments: string[];

  constructor() {
    super();
    this.id = new ObjectID().toHexString();
    this.username = String();
    this.comments = [];
  }
}
