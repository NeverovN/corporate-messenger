// Main level router
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

type AppTabParamList = {
  Feed: undefined;
  ChatList: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type FeedNavigationProp = BottomTabNavigationProp<
  AppTabParamList,
  'Feed'
>;

export type AuthNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Auth'
  >;
export const InnerScreens = createBottomTabNavigator<AppTabParamList>();

export type AppNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
