import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    activeContainerStyle: {
      width: '60%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.submitButton,
      borderRadius: 20,
    },
    inactiveContainerStyle: {
      width: '60%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.submitButtonInactive,
      borderRadius: 20,
    },
    labelStyle: {
      fontFamily: 'Mulish',
      fontSize: 18,
      color: palette.submitButtonText,
    },
  };
});
