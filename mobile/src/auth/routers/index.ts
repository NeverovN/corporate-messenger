import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

// consts
import { REGISTER_SCREEN_NAME, LOGIN_SCREEN_NAME } from '../constants/routes';

type AuthNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type RegistrationNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

// export type AuthProps = {
//   navigation: AuthNavigationProp;
// };

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
