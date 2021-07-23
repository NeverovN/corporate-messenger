import { MessageEntity } from './index';
import { MessageDocument } from './types';

export function mapMessageDocumentToMessageEntity(
  document: MessageDocument,
): MessageEntity {
  return {
    _id: document._id,
    text: document.text,
    author: document.author,
    chatId: document.chatId,
    createdAt: document.createdAt,
    lastEdit: document.lastEdit,
    readBy: document.readBy,
    media: document.media,
  };
}
