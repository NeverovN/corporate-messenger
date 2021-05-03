import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type RegistrationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
