import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type RootStackParamList = {
  Feed: undefined;
};

export type FeedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Feed'
>;

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;