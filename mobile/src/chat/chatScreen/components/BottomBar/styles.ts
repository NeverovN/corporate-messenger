import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    bottomBarStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInputWrapperStyle: {
      marginHorizontal: 15,
      flex: 1,
      borderColor: palette.secondary,
      borderRadius: 20,
      borderWidth: 1,
      minHeight: 40,
      maxHeight: 140,
      padding: 10,
    },
    textInputStyle: {
      fontFamily: 'DroidSans',
      fontSize: 15,
      color: palette.secondary,
    },
    commonStyle: {
      marginHorizontal: 15,
      color: palette.secondary,
    },
    imageStyle: {
      width: 100,
      height: 100,
      margin: 10,
    },
    imageViewer: {
      height: 120,
      width: '100%',
      flexDirection: 'row',
    },
    iconStyle: {
      color: palette.secondary,
    },
  };
});
