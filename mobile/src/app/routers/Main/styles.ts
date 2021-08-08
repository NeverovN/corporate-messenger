import { getStatusBarHeight } from 'react-native-status-bar-height';
import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    headerStyle: {
      height: getStatusBarHeight(),
      backgroundColor: palette.primary,
    },
  };
});
