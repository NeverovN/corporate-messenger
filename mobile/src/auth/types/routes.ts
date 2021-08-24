import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
  LOGIN_SCREEN_NAME,
  REGISTER_SCREEN_NAME,
  USER_DATA_SCREEN_NAME,
} from 'auth/constants/routes';

export type AuthStackParamList = {
  [LOGIN_SCREEN_NAME]: undefined; // TODO: use correct params types if necessary
  [REGISTER_SCREEN_NAME]: undefined; // TODO: use correct params types if necessary
  [USER_DATA_SCREEN_NAME]: { email: string; password: string };
};

export type AuthScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  typeof LOGIN_SCREEN_NAME
>;

export type UserDataRouteProp = RouteProp<
  AuthStackParamList,
  typeof USER_DATA_SCREEN_NAME
>;
