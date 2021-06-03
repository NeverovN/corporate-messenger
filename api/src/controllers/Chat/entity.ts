import { ID } from '../../types/common';
import { ChatEntity } from '../../models/Chat';

class ChatEntityController {
  createChatEntity(participants: ID[]): ChatEntity {
    const newChat = new ChatEntity(participants);

    return newChat;
  }
}

const chatEntityController = new ChatEntityController();

export default chatEntityController;
