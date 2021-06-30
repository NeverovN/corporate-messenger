import { ID, DateLike, Nullable } from '../../types/common';

import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'comments', _id: true },
})
export class CommentEntity {
  _id: ID;

  @prop({ required: true })
  author: ID;

  @prop({ required: true })
  createdAt: DateLike;

  @prop()
  lastEdit: Nullable<DateLike>;

  @prop()
  likes: Array<ID>;

  constructor(authorId: ID) {
    this.author = authorId;
    this.createdAt = new Date().toString();
    this.lastEdit = null;
    this.likes = [];
  }
}

const CommentModel = getModelForClass(CommentEntity);

export default CommentModel;
