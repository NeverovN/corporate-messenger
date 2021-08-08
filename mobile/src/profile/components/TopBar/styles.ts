import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    wrapper: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
    topBarStyle: {
      borderWidth: 1,
      borderColor: palette.secondary,
      borderRadius: 25,
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      height: 40,
    },
    iconStile: {
      marginHorizontal: 10,
      color: palette.secondary,
    },
    inputStyle: {
      marginLeft: 10,
      fontSize: 18,
      fontFamily: 'DroidSans',
      color: palette.secondary,
      flex: 1,
    },
  };
});
