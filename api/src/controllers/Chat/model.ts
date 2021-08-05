import { ID } from '../../types/common';

import ChatModel, { ChatEntity } from '../../models/Chat';
import { ChatDocument } from '../../models/Chat/types';

import { mapChatDocumentToChatEntity } from '../../models/Chat/mappers';
import ChatEntityController from './entity';
import { UserEntity } from '../../models/User';
import { UserController } from '../User';
import { MessageController } from '../Message';

class ChatModelController {
  private mapChatWithFallback(chat: ChatDocument | null): ChatEntity | null {
    if (!chat) return null;

    return mapChatDocumentToChatEntity(chat);
  }

  async getChat(id: ID) {
    const chat = await ChatModel.findById(id).exec();

    if (!chat) {
      throw Error('chat not found');
    }

    return mapChatDocumentToChatEntity(chat);
  }

  async getChats(userId: ID): Promise<Array<ChatEntity>> {
    const chatsQuery = await ChatModel.find().exec();

    const result = chatsQuery.filter(({ participants }) =>
      participants.includes(userId),
    );

    return result.map(mapChatDocumentToChatEntity);
  }

  async createChat(
    participants: ID[],

    title: string | null,
  ): Promise<ChatEntity> {
    const newChat = ChatEntityController.createChatEntity(
      participants,
      false,
      title,
    );

    const createdChat = await ChatModel.create(newChat);

    return mapChatDocumentToChatEntity(createdChat);
  }

  async createDialog(participants: ID[]): Promise<ChatEntity> {
    const newChat = ChatEntityController.createChatEntity(
      participants,
      true,
      null,
    );

    const createdChat = await ChatModel.create(newChat);

    return mapChatDocumentToChatEntity(createdChat);
  }

  async editChatTitle(chatId: ID, newTitle: string) {
    const chat = await ChatModel.findById(chatId).exec();
    if (!chat) {
      throw Error('Chat does not exist');
    }

    const newChat = ChatEntityController.editTitle(
      mapChatDocumentToChatEntity(chat),
      newTitle,
    );

    await ChatModel.findByIdAndUpdate(newChat._id, newChat).exec();
    const updatedChat = await ChatModel.findById(newChat._id).exec();

    if (!updatedChat) {
      throw Error('Network error, chat was not updated');
    }

    return mapChatDocumentToChatEntity(updatedChat);
  }

  async clearHistory(chatId: ID): Promise<boolean> {
    return await MessageController.deleteMessages(chatId);
  }

  async leaveChat(chatId: ID, currentUserId: ID): Promise<ChatEntity> {
    const chat = await ChatModel.findById(chatId).exec();
    if (!chat) {
      throw Error('Chat does not exist');
    }

    const newChat = ChatEntityController.leaveChat(
      mapChatDocumentToChatEntity(chat),
      currentUserId,
    );

    if (newChat.participants.length === 0) {
      await ChatModel.findByIdAndRemove(chat._id).exec();
      return newChat;
    }

    await ChatModel.findByIdAndUpdate(newChat._id, newChat).exec();
    const updatedChat = await ChatModel.findById(newChat._id).exec();

    if (!updatedChat) {
      throw Error('Network error, chat was not updated');
    }

    return mapChatDocumentToChatEntity(updatedChat);
  }

  async updateChatLogo(chatId: ID, logoId: ID | null): Promise<ChatEntity> {
    const chat = await ChatModel.findById(chatId).exec();
    if (!chat) {
      throw Error('Chat does not exist');
    }

    const newChat = ChatEntityController.updateChatLogo(
      mapChatDocumentToChatEntity(chat),
      logoId,
    );

    await ChatModel.findByIdAndUpdate(newChat._id, newChat).exec();
    const updatedChat = await ChatModel.findById(newChat._id).exec();

    if (!updatedChat) {
      throw Error('Network error, chat was not updated');
    }

    return mapChatDocumentToChatEntity(updatedChat);
  }

  async getParticipants(chat: ChatEntity): Promise<UserEntity[]> {
    return await UserController.getUsers(chat.participants);
  }

  async getParticipantsByChatId(chatId: ID): Promise<ID[]> {
    const chat = await this.getChat(chatId);

    return chat.participants;
  }

  async deleteChat(chatId: ID): Promise<boolean> {
    try {
      await ChatModel.findByIdAndDelete(chatId);
      await MessageController.deleteMessages(chatId);
      return true;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}

const chatModelController = new ChatModelController();

export default chatModelController;
