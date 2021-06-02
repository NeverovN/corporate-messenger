import { PostEntity } from './index';
import { PostDocument } from './types';

export function mapPostDocumentToPostEntity(
  document: PostDocument,
): PostEntity {
  return {
    id: document.id,
    author: document.author,
    createdAt: document.createdAt,
    lastEdit: document.lastEdit,

    media: document.media,

    comments: document.comments,
    likes: document.likes,

    repost: document.repost,
  };
}
