import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    screenStyle: {
      flex: 1,
      backgroundColor: palette.primary,
    },
  };
});
