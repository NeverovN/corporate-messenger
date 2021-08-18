import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    buttonStyle: {
      marginTop: 30,
      flexDirection: 'row',
      minWidth: '80%',
      alignItems: 'center',
    },
    darkLabelStyle: {
      fontFamily: 'Mulish',
      fontSize: 18,
      color: palette.secondary,
    },
    lightLabelStyle: {
      fontFamily: 'Mulish',
      fontSize: 18,
      color: palette.primary,
    },
    darkContainerStyle: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: palette.primary,
      padding: 5,
      borderColor: palette.secondary,
      borderWidth: 1,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
    lightContainerStyle: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: palette.secondary,
      padding: 5,
      borderColor: palette.secondary,
      borderWidth: 1,
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
    },
    textStyle: {
      marginHorizontal: 10,
      fontSize: 10,
    },
    activeIndicatorStyle: {
      color: palette.secondary,
      fontFamily: 'Mulish-Regular_ExtraBold',
    },
    inactiveIndicatorStyle: {
      color: palette.secondaryInactive,
      fontFamily: 'Mulish',
    },
  };
});
