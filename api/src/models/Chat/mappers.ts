import { ChatEntity } from './index';
import { ChatDocument } from './types';

export function mapChatDocumentToChatEntity(
  document: ChatDocument,
): ChatEntity {
  return {
    id: document.id,
    logo: document.logo,
    participants: document.participants,
    messages: document.messages,
    settings: document.settings,
  };
}
