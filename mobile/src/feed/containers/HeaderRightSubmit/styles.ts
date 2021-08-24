import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(() => {
  return {
    activeIconStyle: {
      marginRight: 10,
    },
    disabledIconStile: {
      marginRight: 10,
      opacity: 0.3,
    },
  };
});
