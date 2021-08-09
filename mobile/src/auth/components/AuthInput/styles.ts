import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    inputStyle: {
      flex: 1,
      padding: 12,
      fontSize: 15,
      fontFamily: 'DroidSans',
    },

    viewStyle: {
      borderRadius: 30,
      marginBottom: 10,
      backgroundColor: palette.tint,
      flexDirection: 'row',
      alignItems: 'center',
    },
  };
});
