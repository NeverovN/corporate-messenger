import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    chatScreenStyle: {
      flex: 1,
      backgroundColor: palette.primary,
    },
  };
});
