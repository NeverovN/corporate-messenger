import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type AuthNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;
type FeedNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export type AuthProps = {
  navigation: AuthNavigationProp;
};

type RootStackParamList = {
  Auth: undefined;
  Feed: undefined;
};

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
