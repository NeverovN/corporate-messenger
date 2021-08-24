import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    incomingViewStyle: {
      alignItems: 'flex-start',
      margin: 5,
    },
    outgoingViewStyle: {
      alignItems: 'flex-end',
      margin: 5,
    },
    commonMessageStyle: {
      padding: 10,
      borderRadius: 10,
      maxWidth: '80%',
    },
    incomingMessageStyle: {
      backgroundColor: palette.incomingMessage,
    },
    outgoingMessageStyle: {
      backgroundColor: palette.outgoingMessage,
    },
    nameStyle: {
      marginBottom: 3,
    },
    mediaStyle: {
      height: 200,
      width: 200,
    },
    textStyle: {
      fontFamily: 'DroidSans',
      fontSize: 16,
      color: palette.secondary,
      marginLeft: 5,
    },
  };
});
