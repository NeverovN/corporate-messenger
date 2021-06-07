import { URL, ID, DateLike } from '../../types/common';

// eslint-disable-next-line @typescript-eslint/ban-types
type ChatMedia = {};

// eslint-disable-next-line @typescript-eslint/ban-types
type ChatSettings = {};

type ChatMessage = {
  id: ID;
  createdAt: DateLike;
  lastEdit: DateLike;
  author: ID;
  media: Array<ChatMedia>;
};

export interface ChatModel {
  id: ID;
  logo: URL;
  // participants: Array<UserModel['id']>;
  participants: Array<ID>;

  messages: Array<ChatMessage['id']>;
  settings: ChatSettings;
}
