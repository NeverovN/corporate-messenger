import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    wrapperStyle: {
      alignItems: 'center',
    },
    accountSettingsButtonStyles: {
      width: '80%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 20,
      marginBottom: 20,
      backgroundColor: palette.tint,
    },
    textStyle: {
      fontFamily: 'Mulish',
      fontSize: 18,
      color: palette.secondary,
    },
  };
});
