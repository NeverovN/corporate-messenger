import { useGetMessageByIdQuery } from '@/common/types/gql.generated';
import { getName } from '@/profile/utils/getName';
import { IMessageItem } from '../types/message';

export const useGetMessage = (messageId: string): IMessageItem => {
  const { data } = useGetMessageByIdQuery({ variables: { messageId } });

  const isRead =
    (data?.getMessageById && data?.getMessageById?.readBy.length > 1) || false;

  return {
    id: data?.getMessageById?.id || '',
    author: {
      id: data?.getMessageById?.author.id || '',
      name: getName(
        data?.getMessageById?.author.firstName || '',
        data?.getMessageById?.author.lastName || '',
      ),
    },
    content: data?.getMessageById?.content || '',
    createdAt: data?.getMessageById?.createdAt || '',

    isRead,

    lastEdit: data?.getMessageById?.lastEdit || null,
  };
};
