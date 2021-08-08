import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    tabStyle: {
      backgroundColor: palette.primary,
      marginBottom: -useSafeAreaInsets().bottom,
    },
  };
});
