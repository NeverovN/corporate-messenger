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
  id: string;

  @prop({ required: true })
  author: ID;

  @prop({ required: true })
  createdAt: string;

  @prop()
  lastEdit: string;

  @prop()
  avatar: Nullable<URL>;

  @prop()
  repost: Nullable<URL>;

  @prop()
  media: Array<PostMedia>;

  @prop()
  likes: Array<ID>;

  @prop()
  comments: Array<CommentModel>;

  constructor(author: ID) {
    this.author = author;
    this.createdAt = new Date().toString();
  }
}

const PostModel = getModelForClass(PostEntity);

export default PostModel;
