import { ID } from '../../types/common';

import { MessageEntity } from '../../models/Message';

class MessageEntityController {
  createMessageEntity(author: ID, chat: ID, content: string): MessageEntity {
    const newMessage = new MessageEntity(author, chat, content);

    return newMessage;
  }

  editMessage(msg: MessageEntity, content: string): MessageEntity {
    if (content !== msg.content) {
      msg.content = content;
    }

    msg.lastEdit = new Date().toString();

    return msg;
  }
}

const messageEntityController = new MessageEntityController();

export default messageEntityController;
