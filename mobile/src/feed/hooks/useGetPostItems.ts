import { useGetUserQuery } from '@/common/types/gql.generated';
import { PopupMenuItem } from 'react-native-simple-popup-menu';

export const useGetPostItems = (
  author: string,
  currUserItems: PopupMenuItem[],
  otherUserItems: PopupMenuItem[],
): PopupMenuItem[] => {
  const { data } = useGetUserQuery();
  if (!data || !data.getUser) {
    return [];
  }

  if (data.getUser.id === author) {
    return currUserItems;
  }

  return otherUserItems;
};
