// types
import { ChatResolvers } from '../../../types/gql.generated';
import { ChatEntity } from '../../../models/Chat';

// controllers
import { ChatController } from '../../../controllers/Chat';
import { MessageController } from '../../../controllers/Message';

const chatResolvers: ChatResolvers = {
  id: (chat: ChatEntity) => chat._id,
  participants: async (chat: ChatEntity) =>
    await ChatController.getParticipants(chat),
  messages: async (chat: ChatEntity) => {
    const messagesPromise = (
      await MessageController.getMessages(chat._id)
    ).reverse();
    return await Promise.all(messagesPromise);
  },
  title: (chat: ChatEntity) => (chat.title ? chat.title : 'dialog'),
};

export default chatResolvers;
