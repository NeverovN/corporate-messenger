import { ViewStyle, TextStyle } from 'react-native';
import styles from 'chat/chatScreen/components/Message/styles';
import Directions from '../constants/direction';
import DIRECTION from '../constants/direction';
import ACTIONS from '../constants/actions';

// types
import { ContextMenuAction } from 'react-native-context-menu-view';

export const useSetMsgStyle = (
  direction: Directions,
): [ViewStyle, TextStyle, ViewStyle, Array<ContextMenuAction>] => {
  const msgStyle =
    direction === DIRECTION.OUTGOING
      ? styles.outgoingMessageStyle
      : styles.incomingMessageStyle;
  const textStyle =
    direction === DIRECTION.OUTGOING
      ? styles.outgoingTextStyle
      : styles.incomingTextStyle;
  const viewStyle =
    direction === DIRECTION.OUTGOING
      ? styles.outgoingViewStyle
      : styles.incomingViewStyle;

  const actions =
    direction === DIRECTION.OUTGOING
      ? [{ title: ACTIONS.EDIT }, { title: ACTIONS.DELETE, destructive: true }]
      : [{ title: ACTIONS.DELETE, destructive: true }];

  return [msgStyle, textStyle, viewStyle, actions];
};
