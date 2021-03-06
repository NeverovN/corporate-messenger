import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    wrapperStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    textStyle: {
      marginHorizontal: 10,
      fontFamily: 'Mulish',
      fontSize: 12,
      color: palette.secondary,
    },
  };
});
