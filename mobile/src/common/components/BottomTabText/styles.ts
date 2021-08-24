import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    focusedTextStyle: {
      fontSize: 12,
      fontFamily: 'DroidSans-Bold',
      color: palette.secondary,
    },
    unfocusedTextStyle: {
      fontSize: 12,
      fontFamily: 'DroidSans',
      color: palette.secondaryInactive,
    },
  };
});
