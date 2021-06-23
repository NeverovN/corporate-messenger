import { selectedFriendsVar } from '@/common/cache/cache';
import COLORS from '@/common/constants/colors';

export const useUserStyle = (userId: string) => {
  const isSelected = selectedFriendsVar().includes(userId);
  return isSelected ? { backgroundColor: COLORS.lightBlue } : {};
};
