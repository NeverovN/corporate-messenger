import { ID } from '../../types/common';

import { MessageEntity } from '../../models/Message';

class MessageEntityController {
  createMessageEntity(
    author: ID,
    receivers: ID[],
    content: string,
  ): MessageEntity {
    const newMessage = new MessageEntity(author, receivers, content);

    return newMessage;
  }
}

const messageEntityController = new MessageEntityController();

export default messageEntityController;
