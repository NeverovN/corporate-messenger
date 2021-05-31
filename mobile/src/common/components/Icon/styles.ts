import { StyleSheet } from 'react-native';

import { IconType } from '@/common/types/styles';

export default StyleSheet.create({
  [IconType.LARGE]: {
    fontSize: 24,
  },
  [IconType.MEDIUM]: {
    fontSize: 18,
  },
  [IconType.SMALL]: {
    fontSize: 12,
  },
});
