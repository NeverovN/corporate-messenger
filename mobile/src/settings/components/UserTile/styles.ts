import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  userTileStyle: {
    flexDirection: 'row',
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  userImageImageStyle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    margin: 15,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  userInfoStyle: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userNameStyle: {
    fontFamily: 'Mulish',
    fontSize: 20,
    color: COLORS.secondary,
  },
  userEmailStyle: {
    fontFamily: 'Mulish',
    fontSize: 15,
    color: COLORS.secondary,
  },
});
