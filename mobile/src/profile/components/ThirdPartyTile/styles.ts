import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    thirdPartyTileStyles: {
      backgroundColor: palette.tint,
      padding: 20,
      marginTop: 10,
      borderRadius: 10,
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
