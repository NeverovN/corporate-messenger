import { selectedFriendsVar } from '@/common/cache/cache';

export const useUserStyle = (userId: string) => {
  const isSelected = selectedFriendsVar().includes(userId);
  return isSelected ? { backgroundColor: '#4bb3fd40' } : {};
};
