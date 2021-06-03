import { ID } from '../../types/common';

import MessageModel, { MessageEntity } from '../../models/Message';
import { MessageDocument } from '../../models/Message/types';

import { mapMessageDocumentToMessageEntity } from '../../models/Message/mappers';
import MessageEntityController from './entity';
import { UserEntity } from '../../models/User';
import { UserController } from '../User';

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

  async createMessage(
    author: ID,
    receivers: ID[],
    content: string,
  ): Promise<MessageEntity> {
    const newMessage = MessageEntityController.createMessageEntity(
      author,
      receivers,
      content,
    );

    const createdMessage = await MessageModel.create(newMessage);

    await createdMessage.save();

    return mapMessageDocumentToMessageEntity(createdMessage);
  }

  async getReceivers(msg: MessageEntity): Promise<UserEntity[]> {
    const users = await UserController.getAllUsers();
    const participants = users.filter((user) =>
      msg.receivers.includes(user._id),
    );

    return participants;
  }
}

const messageModelController = new MessageModelController();

export default messageModelController;
