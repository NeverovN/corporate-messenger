import { ID } from '../../types/common';

import MessageModel, { MessageEntity } from '../../models/Message';
import { MessageDocument } from '../../models/Message/types';

import { mapMessageDocumentToMessageEntity } from '../../models/Message/mappers';
import MessageEntityController from './entity';
import { CreateMessageInput } from '../../types/gql.generated';

class MessageModelController {
  private mapMessageWithFallback(
    message: MessageDocument | null,
  ): MessageEntity | null {
    if (!message) return null;

    return mapMessageDocumentToMessageEntity(message);
  }

  async getMessage(id: ID) {
    const message = await MessageModel.findById(id);

    if (!message) {
      throw Error('chat not found');
    }

    return mapMessageDocumentToMessageEntity(message);
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
    input: CreateMessageInput,
  ): Promise<MessageEntity> {
    const newMessage = await MessageEntityController.createMessageEntity(
      author,
      input,
    );

    const createdMessage = await MessageModel.create(newMessage);
    await createdMessage.save();

    return mapMessageDocumentToMessageEntity(createdMessage);
  }

  async deleteMessage(msgId: ID): Promise<boolean> {
    try {
      await MessageModel.findByIdAndDelete(msgId).exec();
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

  async editMessage(messageId: ID, newContent: string): Promise<MessageEntity> {
    const message = await MessageModel.findById(messageId).exec();

    if (!message) {
      throw Error('message not found');
    }

    const msg = MessageEntityController.editMessage(
      mapMessageDocumentToMessageEntity(message),
      newContent,
    );

    await MessageModel.findByIdAndUpdate(messageId, msg).exec();

    const newMessage = await MessageModel.findById(messageId);

    // i have no idea why but only findByIdAndUpdate does not update value on execution. Result comes in time of next operation, so there is delay

    if (!newMessage) {
      throw Error('network error, update not complete');
    }

    return mapMessageDocumentToMessageEntity(newMessage);
  }

  async markRead(messageId: string, userId: string): Promise<MessageEntity> {
    const message = await MessageModel.findById(messageId).exec();
    if (!message) {
      throw Error('message not found');
    }

    if (message.readBy.includes(userId)) {
      return mapMessageDocumentToMessageEntity(message);
    }

    const msgEntity = MessageEntityController.addReader(
      mapMessageDocumentToMessageEntity(message),
      userId,
    );

    await MessageModel.findByIdAndUpdate(messageId, msgEntity).exec();
    const updatedMessage = await MessageModel.findById(messageId).exec();

    if (!updatedMessage) {
      throw Error('network error, update not complete');
    }

    return mapMessageDocumentToMessageEntity(updatedMessage);
  }
}

const messageModelController = new MessageModelController();

export default messageModelController;
