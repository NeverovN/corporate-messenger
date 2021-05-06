import { StackNavigationProp } from '@react-navigation/stack';
import { LOGIN_SCREEN_NAME, REGISTER_SCREEN_NAME } from 'auth/constants/routes';

export type AuthStackParamList = {
  [LOGIN_SCREEN_NAME]: undefined; // TODO: use correct params types if necessary
  [REGISTER_SCREEN_NAME]: undefined; // TODO: use correct params types if necessary
};

export type AuthScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  typeof LOGIN_SCREEN_NAME
>;
