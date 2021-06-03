import { ID } from '../../types/common';

import ChatModel, { ChatEntity } from '../../models/Chat';
import { ChatDocument } from '../../models/Chat/types';

import { mapChatDocumentToChatEntity } from '../../models/Chat/mappers';
import ChatEntityController from './entity';
import { UserEntity } from '../../models/User';
import { UserController } from '../User';

class ChatModelController {
  private mapChatWithFallback(chat: ChatDocument | null): ChatEntity | null {
    if (!chat) return null;

    return mapChatDocumentToChatEntity(chat);
  }

  async getChat(id: ID) {
    const chat = await ChatModel.findById(id);

    return this.mapChatWithFallback(chat);
  }

  async getChats(userId: ID): Promise<Array<ChatEntity>> {
    const chatsQuery = await ChatModel.find().exec();

    const result = chatsQuery.filter(({ participants }) =>
      participants.includes(userId),
    );

    return result.map(mapChatDocumentToChatEntity);
  }

  async createChat(participants: ID[]): Promise<ChatEntity> {
    const newChat = ChatEntityController.createChatEntity(participants);

    const createdChat = await ChatModel.create(newChat);

    return mapChatDocumentToChatEntity(createdChat);
  }

  async getParticipants(chat: ChatEntity): Promise<UserEntity[]> {
    const users = await UserController.getAllUsers();
    const participants = users.filter((user) =>
      chat.participants.includes(user._id),
    );

    return participants;
  }
}

const chatModelController = new ChatModelController();

export default chatModelController;
