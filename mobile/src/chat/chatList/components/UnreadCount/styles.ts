import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    unreadStyle: {
      marginRight: 10,
      borderRadius: 20,
      borderColor: palette.secondary,
      borderWidth: 1,

      alignItems: 'center',
      justifyContent: 'center',
      height: 20,
      minWidth: 40,
    },
    wrapperStyle: {
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 15,
    },
    textStyle: {
      color: palette.secondary,
      fontSize: 12,
      fontFamily: 'Mulish',
    },
  };
});
