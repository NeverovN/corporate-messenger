import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    bottomTileBarStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerStyle: {
      alignItems: 'center',
    },
    labelStyle: {
      marginLeft: 5,
      fontSize: 15,
      fontFamily: 'DroidSans',
      color: palette.secondary,
    },
  };
});
