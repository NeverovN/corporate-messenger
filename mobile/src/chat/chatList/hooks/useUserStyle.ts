import { ViewStyle } from 'react-native';

// cache
import { selectedFriendsVar } from '@/common/cache/cache';

import { useTheme } from 'react-native-stylex';

export const useUserStyle = (userId: string): ViewStyle => {
  const { palette } = useTheme();
  const isSelected = selectedFriendsVar().includes(userId);
  return isSelected
    ? {
        borderColor: palette.secondary,
        borderWidth: 1,
        shadowColor: palette.black,
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
