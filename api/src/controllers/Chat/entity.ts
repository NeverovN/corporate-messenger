import { ID } from '../../types/common';
import { ChatEntity } from '../../models/Chat';
import ChatModel from '../../models/Chat';
import { ChatDocument } from '../../models/Chat/types';

class ChatEntityController {
  createChatEntity(participants: ID[]): ChatEntity {
    return new ChatEntity(participants);
  }

  async getChatById(chatId: ID): Promise<ChatDocument> {
    const chatDocument = await ChatModel.findById(chatId).exec();

    if (!chatDocument) {
      throw Error('invalid chat id or chat does not exist');
    }

    return chatDocument; // not confident is it needed
  }
}

const chatEntityController = new ChatEntityController();

export default chatEntityController;
