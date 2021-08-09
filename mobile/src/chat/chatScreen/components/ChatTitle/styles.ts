import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    headerStyle: {
      flexDirection: 'row',
      width: 300,
    },
    wrapperStyle: {
      justifyContent: 'center',
    },
    imageStyle: {
      height: 40,
      width: 40,
      marginRight: 20,
      borderColor: palette.secondary,
      borderRadius: 20,
      borderWidth: 1,
    },
    titleTextStyle: {
      fontFamily: 'Mulish',
      fontSize: 15,
      color: palette.secondary,
    },
    membersTextStyle: {
      fontFamily: 'Mulish',
      fontSize: 12,
      color: palette.secondary,
    },
  };
});
