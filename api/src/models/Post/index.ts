import { ID, DateLike, Nullable } from '../../types/common';

// eslint-disable-next-line @typescript-eslint/ban-types
type PostMedia = {};

export type CommentModel = {
  id: ID;
  author: ID;
  createdAt: DateLike;
  lastEdit: DateLike;
  likes: Array<ID>; // array of user ids (person who can leave like) - in GQL it can me GQL User type
};

export type PostModel = {
  id: ID;
  author: ID;
  repost: Nullable<ID>; // link to original post
  media: Array<PostMedia>;
  likes: Array<ID>; // array of user ids (person who can leave like) - in GQL it can me GQL User type
  createdAt: DateLike;
  lastEdit: DateLike;

  comments: Array<CommentModel>;
};
