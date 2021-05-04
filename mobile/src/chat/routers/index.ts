import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type RootStackParamList = {
  ChatList: undefined;
};

export type FeedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChatList'
>;

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
