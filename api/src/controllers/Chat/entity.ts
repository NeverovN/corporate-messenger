import { ChatEntity } from '../../models/Chat';
import { UserEntity } from '../../models/User';

class ChatEntityController {
  createChatEntity(participants: UserEntity[]): ChatEntity {
    const newChat = new ChatEntity(participants);

    return newChat;
  }
}

const chatEntityController = new ChatEntityController();

export default chatEntityController;
