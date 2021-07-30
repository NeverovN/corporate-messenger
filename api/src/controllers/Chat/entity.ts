import { ID } from '../../types/common';
import { ChatEntity } from '../../models/Chat';

class ChatEntityController {
  createChatEntity(
    participants: ID[],
    isDialog: boolean,
    title: string | null,
  ): ChatEntity {
    return new ChatEntity(participants, isDialog, title);
  }

  editTitle(chat: ChatEntity, newTitle: string): ChatEntity {
    return { ...chat, title: newTitle };
  }
}

const chatEntityController = new ChatEntityController();

export default chatEntityController;
