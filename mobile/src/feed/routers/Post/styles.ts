import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    headerStyle: {
      backgroundColor: palette.primary,
    },
  };
});
