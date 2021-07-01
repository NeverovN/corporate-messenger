import { CommentEntity } from './index';
import { CommentDocument } from './types';

export function mapCommentDocumentToCommentEntity(
  document: CommentDocument,
): CommentEntity {
  return {
    _id: document._id,
    postId: document.postId,
    author: document.author,
    content: document.content,
    createdAt: document.createdAt,
    lastEdit: document.lastEdit,

    likes: document.likes,
  };
}
