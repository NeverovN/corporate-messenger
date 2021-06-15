import { selectedFriendsVar } from '@/common/cache/cache';

export const useHandleFriendSelection = (
  isSelected: boolean,
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>,
  userId: string,
) => {
  return () => {
    if (isSelected) {
      const selected = selectedFriendsVar();
      selectedFriendsVar(selected.filter((user) => user !== userId));
    } else {
      const selected = selectedFriendsVar();
      selectedFriendsVar([...selected, userId]);
    }
    setIsSelected(!isSelected);
  };
};
