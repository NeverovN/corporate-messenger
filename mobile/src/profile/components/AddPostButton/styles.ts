import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    wrapperStyle: {
      flex: 1,
      alignItems: 'center',
    },
    addPostButtonStyle: {
      width: '80%',
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 20,
      borderWidth: 1,
      borderColor: palette.secondary,
    },
    iconStyle: {
      fontSize: 14,
      marginRight: 5,
      color: palette.secondary,
    },
    labelStyle: {
      fontSize: 14,
      color: palette.secondary,
    },
  };
});
