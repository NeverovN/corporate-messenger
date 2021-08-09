import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    wrapperStyle: {
      flex: 1,
      alignItems: 'center',
    },
    friendButtonStyle: {
      width: '80%',
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 20,
      borderWidth: 1,
      borderColor: palette.secondary,
    },
    labelStyle: {
      color: palette.secondary,
    },
  };
});
