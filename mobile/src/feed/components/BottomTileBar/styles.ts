import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    bottomTileBarStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerStyle: {
      alignItems: 'center',
      marginRight: 5,
    },
    labelStyle: {
      marginLeft: 5,
      fontSize: 18,
      fontFamily: 'DroidSans',
      color: palette.secondary,
    },
  };
});
