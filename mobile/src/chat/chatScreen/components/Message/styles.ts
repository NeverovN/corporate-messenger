import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  incomingViewStyle: { alignItems: 'flex-start', margin: 5 },
  outgoingViewStyle: { alignItems: 'flex-end', margin: 5 },
  commonMessageStyle: {
    padding: 10,
    borderRadius: 10,
  },
  incomingMessageStyle: {
    backgroundColor: COLORS.incomingMsgColor,
  },
  outgoingMessageStyle: {
    backgroundColor: COLORS.outgoingMsgColor,
  },
  incomingTextStyle: {},
  outgoingTextStyle: { color: COLORS.white },
  nameStyle: {
    marginBottom: 3,
  },
  readIndicatorStyle: {
    height: 3,
    width: 3,
    borderRadius: 2,
    backgroundColor: COLORS.lightBlue,
  },
  mediaStyle: {
    height: 200,
    width: 200,
  },
});
