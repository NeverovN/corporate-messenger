import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    searchScreenStyle: {
      flex: 1,
      backgroundColor: palette.primary,
    },
  };
});
