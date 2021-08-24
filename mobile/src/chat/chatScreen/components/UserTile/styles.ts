import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    itemStyle: {
      flexDirection: 'row',
      height: 80,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: palette.secondary,
      marginBottom: 10,
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    imageStyle: {
      height: 65,
      width: 65,
      borderRadius: 35,
      borderColor: palette.secondary,
      borderWidth: 1,
      marginRight: 20,
    },
    nameStyle: {
      fontSize: 20,
      fontFamily: 'Mulish-Regular_Bold',
      color: palette.secondary,
    },
  };
});
