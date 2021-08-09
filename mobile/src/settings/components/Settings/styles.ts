import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    settingsStyle: {
      flex: 1,
    },
    safeAreaStyle: {
      flex: 1,
      backgroundColor: palette.primary,
    },
    buttonWrapper: {
      alignItems: 'center',
      marginBottom: 60,
    },
    logoutButtonContainerStyle: {
      width: '60%',
      height: 40,
      backgroundColor: palette.submitButton,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoutButtonLabelStyle: {
      color: palette.submitButtonText,
      fontSize: 18,
      fontFamily: 'Mulish',
    },
  };
});
