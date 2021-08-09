import { ID } from '../../types/common';
import { ChatEntity } from '../../models/Chat';

class ChatEntityController {
  createChatEntity(
    participants: ID[],
    isDialog: boolean,
    title: string | null,
  ): ChatEntity {
    return new ChatEntity(participants, isDialog, title);
  }

  editTitle(chat: ChatEntity, newTitle: string): ChatEntity {
    return { ...chat, title: newTitle };
  }

  leaveChat(chat: ChatEntity, currentUserId: string): ChatEntity {
    const newParticipants = chat.participants.filter(
      (user) => user !== currentUserId,
    );

    return { ...chat, participants: newParticipants };
  }

  updateChatLogo(chat: ChatEntity, logoId: ID | null) {
    return { ...chat, logo: logoId };
  }
}

const chatEntityController = new ChatEntityController();

export default chatEntityController;
