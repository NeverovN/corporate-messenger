import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  incomingViewStyle: { alignItems: 'flex-start', margin: 5 },
  outgoingViewStyle: { alignItems: 'flex-end', margin: 5 },
  commonMessageStyle: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  incomingMessageStyle: {
    backgroundColor: COLORS.incomingMessage,
  },
  outgoingMessageStyle: {
    backgroundColor: COLORS.outgoingMessage,
  },
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
  textStyle: {
    fontFamily: 'DroidSans',
    fontSize: 16,
    color: COLORS.secondary,
    marginLeft: 5,
  },
});
