import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    chatLogoStyle: {
      width: 50,
      height: 50,
      marginHorizontal: 15,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: palette.secondary,
    },
  };
});
