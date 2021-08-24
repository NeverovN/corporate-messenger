import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    screenStyle: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: palette.primary,
    },
    flatListStyle: {
      width: '95%',
    },
    buttonLabelStyle: {
      fontFamily: 'DroidSans',
      fontSize: 18,
      color: palette.secondary,
    },
    buttonContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: '60%',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: palette.secondary,
    },
  };
});
