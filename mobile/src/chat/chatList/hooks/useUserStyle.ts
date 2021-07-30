import { ViewStyle } from 'react-native';

// cache
import { selectedFriendsVar } from '@/common/cache/cache';

// colors
import COLORS from '@/common/constants/colors';

export const useUserStyle = (userId: string): ViewStyle => {
  const isSelected = selectedFriendsVar().includes(userId);
  return isSelected
    ? {
        borderColor: COLORS.secondary,
        borderWidth: 1,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }
    : {};
};
