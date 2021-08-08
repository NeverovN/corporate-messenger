import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    componentStyle: {
      alignItems: 'center',
    },
    tileStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: 150,
      width: '100%',

      marginTop: 10,

      borderRadius: 10,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,

      backgroundColor: palette.tint,
    },
    changePhotoLabelStyle: {
      marginLeft: 5,
      fontFamily: 'Mulish',
      fontSize: 16,
      color: palette.secondary,
    },
    inputPartViewStyle: {
      flex: 3,
      paddingLeft: 20,
    },
    attachmentsButtonContainerStyle: {
      marginTop: 10,
      marginBottom: 20,
    },
    titleTextStyle: {
      marginLeft: 20,
      fontFamily: 'Mulish',
      fontSize: 14,
      color: palette.secondary,
    },
    inputWrapperStyle: {
      height: 40,
      width: '100%',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: palette.secondary,
      justifyContent: 'center',
      paddingLeft: 20,
      marginVertical: 10,
    },
    inputStyle: {
      fontFamily: 'Mulish',
      fontSize: 16,
      color: palette.secondary,
    },
    imageStyle: {
      height: 110,
      width: 110,
      borderRadius: 60,
      borderWidth: 1,
      borderColor: palette.secondary,
    },
    manageButtonsViewStyle: {
      flexDirection: 'row',
      height: 40,
    },
    textButtonContainerStyle: {
      flex: 1,
      height: 30,
      borderRadius: 15,
      borderColor: palette.secondary,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    membersTextStyle: {
      marginVertical: 15,
      fontFamily: 'Mulish-Regular_Bold',
      fontSize: 15,
      color: palette.secondary,
    },
    separator: {
      width: 20,
    },
    nameStyle: {
      fontFamily: 'Mulish',
      fontSize: 22,
      color: palette.secondary,
    },
    containerStyle: {
      alignItems: 'center',
    },
  };
});
