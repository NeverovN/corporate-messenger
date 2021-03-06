import { UserEntity } from './index';
import { UserDocument } from './types';

export function mapUserDocumentToUserEntity(
  document: UserDocument,
): UserEntity {
  return {
    _id: document._id,
    email: document.email,
    password: document.password,
    firstName: document.firstName,
    lastName: document.lastName,
    friends: document.friends,
    theme: document.theme,
    avatar: document.avatar,
    settings: document.settings,
  };
}
