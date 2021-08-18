import { ID } from '../../types/common';
import { CreateMessageInput } from '../../types/gql.generated';
import { MessageEntity } from '../../models/Message';

class MessageEntityController {
  async createMessageEntity(
    author: ID,
    content: CreateMessageInput,
  ): Promise<MessageEntity> {
    const newMessage = new MessageEntity(
      author,
      content.chatId,
      content.content.text,
      content.content.media || null,
    );

    return newMessage;
  }

  editMessage(msg: MessageEntity, content: string): MessageEntity {
    if (content !== msg.text) {
      msg.text = content;
    }

    msg.lastEdit = new Date().toString();

    return msg;
  }

  addReader(msg: MessageEntity, user: ID): MessageEntity {
    msg.readBy.push(user);

    return msg;
  }
}

const messageEntityController = new MessageEntityController();

export default messageEntityController;
