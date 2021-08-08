import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    imageStyle: {
      height: 60, // default
      width: 60,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: palette.secondary,
      marginRight: 15,
    },
  };
});
