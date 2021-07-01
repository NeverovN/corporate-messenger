import { ID, DateLike, Nullable, URL } from '../../types/common';

import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';

// eslint-disable-next-line @typescript-eslint/ban-types
type PostMedia = {};

export type CommentModel = {
  id: ID;
  author: ID;
  createdAt: DateLike;
  lastEdit: DateLike;
  likes: Array<ID>; // array of user ids (person who can leave like) - in GQL it can me GQL User type
};

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'posts', _id: true },
})
export class PostEntity {
  _id: string;

  @prop({ required: true })
  author: ID;

  @prop({ required: true })
  createdAt: DateLike;

  @prop()
  lastEdit: Nullable<DateLike>;

  @prop()
  repost: Nullable<URL>;

  @prop()
  media: Array<PostMedia>;

  @prop()
  likes: Array<ID>;

  @prop()
  comments: Array<ID>;

  constructor(authorId: ID) {
    this.author = authorId;
    this.createdAt = new Date().toString();
    this.lastEdit = null;
    this.repost = null;
    this.media = [];
    this.likes = [];
    this.comments = [];
  }
}

const PostModel = getModelForClass(PostEntity);

export default PostModel;
