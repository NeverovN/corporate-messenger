import COLORS from '@/common/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  feedStyle: {
    width: '100%',
    padding: 10,
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
  },
  userIconImageStyle: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10,
  },
  textStyle: {
    flex: 1,
  },
  infoStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginLeft: 3,
  },
});
