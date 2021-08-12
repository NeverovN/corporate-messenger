import { ID } from '../../types/common';
import { CreateMessageInput } from '../../types/gql.generated';
import { MessageEntity } from '../../models/Message';
import { FireBaseController } from '../FireBase';

class MessageEntityController {
  async createMessageEntity(
    author: ID,
    content: CreateMessageInput,
  ): Promise<MessageEntity> {
    const media = await FireBaseController.addItems(
      content.content.media || null,
    );
    const newMessage = new MessageEntity(
      author,
      content.chatId,
      content.content.text,
      media,
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
