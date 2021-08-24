import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    editButtonViewStyle: {
      width: '80%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.tint,
      borderRadius: 20,
      marginTop: 20,
    },
    labelStyle: {
      fontFamily: 'Mulish',
      fontSize: 17,
      color: palette.secondary,
    },
  };
});
