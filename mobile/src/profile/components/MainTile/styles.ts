import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    mainTileStyles: {
      padding: 20,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: palette.tint,
    },
    buttonsWrapperStyle: {
      flexDirection: 'row',
    },
    separator: {
      height: 30,
      width: 1,
      backgroundColor: palette.secondary,
    },
  };
});
