import { ChatEntity } from './index';
import { ChatDocument } from './types';

export function mapChatDocumentToChatEntity(
  document: ChatDocument,
): ChatEntity {
  return {
    _id: document._id,
    logo: document.logo,
    participants: document.participants,
    messages: document.messages,
    settings: document.settings,
  };
}
