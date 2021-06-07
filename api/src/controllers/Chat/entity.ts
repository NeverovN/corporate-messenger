import { ID } from '../../types/common';
import { ChatEntity } from '../../models/Chat';
class ChatEntityController {
  createChatEntity(participants: ID[]): ChatEntity {
    return new ChatEntity(participants);
  }
}

const chatEntityController = new ChatEntityController();

export default chatEntityController;
