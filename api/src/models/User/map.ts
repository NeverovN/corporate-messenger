import { User as UserGQL } from '@/types/gql.generated';
import { UserModel } from './index';

export function mapUserToGQL(user: UserModel): UserGQL {
  return {
    id: user.id,
    email: user.email,
    avatar: user.avatar,
    firstName: user.firstName,
    lastName: user.lastName,
    // friends: user.friends,
    settings: user.settings,
  };
}
