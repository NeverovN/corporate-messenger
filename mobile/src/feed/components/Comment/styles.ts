import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    feedStyle: {
      width: '100%',
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: palette.secondary,
    },
    userIconImageStyle: {
      width: 30,
      height: 30,
      borderRadius: 25,
      marginRight: 10,
    },
    textWrapperStyle: {
      flex: 1,
    },
    primaryTextStyle: {
      fontFamily: 'DroidSans',
      fontSize: 14,
      color: palette.secondary,
    },
    secondaryTextStyle: {
      fontFamily: 'Mulish-Regular_Bold',
      fontSize: 14,
      color: palette.secondary,
    },
    minorTextStyle: {
      fontFamily: 'Mulish',
      fontSize: 12,
      color: palette.secondaryInactive,
    },
    infoStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    likeStyle: {
      flexDirection: 'row',
    },
    iconStyle: {
      marginLeft: 5,
      color: palette.secondary,
    },
  };
});
