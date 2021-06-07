import { ID } from '../../types/common';

import MessageModel, { MessageEntity } from '../../models/Message';
import { MessageDocument } from '../../models/Message/types';

import { mapMessageDocumentToMessageEntity } from '../../models/Message/mappers';
import MessageEntityController from './entity';

class MessageModelController {
  private mapMessageWithFallback(
    message: MessageDocument | null,
  ): MessageEntity | null {
    if (!message) return null;

    return mapMessageDocumentToMessageEntity(message);
  }

  async getMessage(id: ID) {
    const message = await MessageModel.findById(id);

    return this.mapMessageWithFallback(message);
  }

  async getMessages(ids: ID[]): Promise<Array<MessageEntity>> {
    const messagesQuery = await MessageModel.find().exec();

    const result = messagesQuery.filter(({ id }) => ids.includes(id));

    return result.map(mapMessageDocumentToMessageEntity);
  }

  async getMessagesByAuthor(author: ID): Promise<(MessageEntity | null)[]> {
    const messages = await MessageModel.find({ author });

    return messages.map((el) => this.mapMessageWithFallback(el));
  }

  async getChatMessages(targetChatId: ID): Promise<MessageEntity[]> {
    const messagesQuery = await MessageModel.find().exec();

    const messages = messagesQuery.filter(
      ({ chatId }) => chatId === targetChatId,
    );

    return messages.map(mapMessageDocumentToMessageEntity);
  }

  async createMessage(
    author: ID,
    chatId: ID,
    content: string,
  ): Promise<MessageEntity> {
    const newMessage = MessageEntityController.createMessageEntity(
      author,
      chatId,
      content,
    );

    const createdMessage = await MessageModel.create(newMessage);
    await createdMessage.save();

    return mapMessageDocumentToMessageEntity(createdMessage);
  }
}

const messageModelController = new MessageModelController();

export default messageModelController;
