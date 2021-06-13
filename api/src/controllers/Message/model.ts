import { ID } from '../../types/common';

import MessageModel, { MessageEntity } from '../../models/Message';
import { MessageDocument } from '../../models/Message/types';

import { mapMessageDocumentToMessageEntity } from '../../models/Message/mappers';
import MessageEntityController from './entity';

class MessageModelController {
  private mapMessageWithFallback(message: MessageDocument): MessageEntity {
    return mapMessageDocumentToMessageEntity(message);
  }

  async getMessage(id: ID) {
    const message = await MessageModel.findById(id);

    if (!message) {
      throw Error('chat not found');
    }

    return this.mapMessageWithFallback(message);
  }

  async getMessages(chatId: ID): Promise<Array<MessageEntity>> {
    const messagesQuery = await MessageModel.find({ chatId }).exec();

    return messagesQuery.map(mapMessageDocumentToMessageEntity);
  }

  async getMessagesByAuthor(author: ID): Promise<(MessageEntity | null)[]> {
    const messages = await MessageModel.find({ author });

    return messages.map((el) => this.mapMessageWithFallback(el));
  }

  async createMessage(
    author: ID,
    chatId: ID,
    content: string,
  ): Promise<MessageEntity> {
    const newMessage = await MessageEntityController.createMessageEntity(
      author,
      chatId,
      content,
    );

    const createdMessage = await MessageModel.create(newMessage);
    await createdMessage.save();

    return mapMessageDocumentToMessageEntity(createdMessage);
  }

  async deleteMessage(msgId: ID): Promise<boolean> {
    try {
      await MessageModel.findByIdAndDelete(msgId);
      return true;
    } catch (error) {
      throw Error(`${error}`);
    }
  }

  async deleteMessages(chatId: ID): Promise<boolean> {
    try {
      await MessageModel.deleteMany({ chatId });
      return true;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}

const messageModelController = new MessageModelController();

export default messageModelController;
