import React from 'react';
import AuthScreen from './AuthScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const screens = createStackNavigator({
  start: AuthScreen,
});

export default createAppContainer(screens);
