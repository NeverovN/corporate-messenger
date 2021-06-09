// types
import { ChatResolvers } from '../../../types/gql.generated';
import { ChatEntity } from '../../../models/Chat';

// controllers
import { ChatController } from '../../../controllers/Chat';

const chatResolvers: ChatResolvers = {
  id: (chat: ChatEntity) => chat._id,
  participants: async (chat: ChatEntity) =>
    await ChatController.getParticipants(chat),
  messages: async (chat: ChatEntity) => {
    return await ChatController.getMessages(chat._id);
  },
};

export default chatResolvers;
