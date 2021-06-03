import { MessageEntity } from './index';
import { MessageDocument } from './types';

export function mapMessageDocumentToMessageEntity(
  document: MessageDocument,
): MessageEntity {
  return {
    id: document.id,
    content: document.content,
    author: document.author,
    receivers: document.receivers,
    createdAt: document.createdAt,
    lastEdit: document.lastEdit,

    media: document.media,
  };
}
