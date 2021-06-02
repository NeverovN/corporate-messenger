import { UserEntity } from './index';
import { UserDocument } from './types';

export function mapUserDocumentToUserEntity(
  document: UserDocument,
): UserEntity {
  return {
    id: document.id,
    email: document.email,
    password: document.password,
    firstName: document.firstName,
    lastName: document.lastName,
    friends: document.friends,
    avatar: document.avatar,
    settings: document.settings,
  };
}
