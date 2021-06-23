import { ID } from '../../types/common';
import { ChatEntity } from '../../models/Chat';

class ChatEntityController {
  createChatEntity(participants: ID[], title: string): ChatEntity {
    return new ChatEntity(participants, title);
  }
}

const chatEntityController = new ChatEntityController();

export default chatEntityController;
