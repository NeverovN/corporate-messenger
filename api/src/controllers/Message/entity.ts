import { ID } from '../../types/common';
import { CreateMessageInput } from '../../types/gql.generated';
import { MessageEntity } from '../../models/Message';

class MessageEntityController {
  createMessageEntity(author: ID, content: CreateMessageInput): MessageEntity {
    const newMessage = new MessageEntity(author, content);

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
