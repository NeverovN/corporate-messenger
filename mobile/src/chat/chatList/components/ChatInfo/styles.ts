import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    chatInfoViewStyle: {
      justifyContent: 'center',
      marginBottom: 5,
    },
    primaryTextStyle: {
      fontFamily: 'Mulish-Regular_Bold',
      fontSize: 15,
      color: palette.secondary,
    },
    secondaryTextStyle: {
      fontFamily: 'Mulish',
      fontSize: 12,
      color: palette.secondary,
    },
  };
});
