// types
import { ChatResolvers } from '../../../types/gql.generated';
import { ChatEntity } from '../../../models/Chat';

// controllers
import { MessageController } from '../../../controllers/Message';
import { ChatController } from '../../../controllers/Chat';

const chatResolvers: ChatResolvers = {
  id: (chat: ChatEntity) => chat._id,
  participants: async (chat: ChatEntity) =>
    await ChatController.getParticipants(chat),
  messages: async (chat: ChatEntity) => {
    return await MessageController.getChatMessages(chat._id);
  },
};

export default chatResolvers;
