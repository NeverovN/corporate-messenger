import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type RootStackParamList = {
  ChatList: undefined;
};

export type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChatList'
>;

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
