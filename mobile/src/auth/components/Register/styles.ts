import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    screenNameStyle: {
      fontFamily: 'Mulish-Regular_Light',
      fontSize: 50,
      color: palette.secondary,
    },

    screenNameWrapper: {
      margin: 30,
    },

    inputAreaStyle: {
      borderRadius: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '75%',
      padding: 10,
    },

    wrapperStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    passwordStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    screenStyle: {
      flex: 1,
      backgroundColor: palette.primary,
      justifyContent: 'center',
    },

    screenWrapperStyle: {
      marginBottom: 90,
      alignItems: 'center',
    },

    buttonWrapperStyle: {
      width: '100%',
      marginTop: 50,
    },

    iconStyle: {
      marginRight: 10,
    },
  };
});
