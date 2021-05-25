import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import { CHAT_LIST_SCREEN_NAME } from '../constants/routes';

type RootStackParamList = {
  [CHAT_LIST_SCREEN_NAME]: undefined;
};

export type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof CHAT_LIST_SCREEN_NAME
>;

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
