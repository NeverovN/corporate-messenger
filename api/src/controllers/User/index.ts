import { DocumentType } from '@typegoose/typegoose';

import UserModel, { UserEntity } from '../../models/User';
import { Nullable, URL } from '../../types/common';

function mapUserDocumentToUserEntity(
  document: DocumentType<UserEntity>,
): UserEntity {
  return {
    _id: document._id,
    email: document.email,
    password: document.password,
    firstName: document.firstName,
    lastName: document.lastName,
    friends: document.friends,
    avatar: document.avatar,
    settings: document.settings,
  };
}

class UserController {
  private mapUserWithFallback(
    user: DocumentType<UserEntity> | null,
  ): UserEntity | null {
    if (!user) return null;

    return mapUserDocumentToUserEntity(user);
  }

  async getUser(id: string) {
    const user = await UserModel.findById(id);

    return this.mapUserWithFallback(user);
  }

  async getUserByEmail(email: string): Promise<UserEntity | null> {
    const user = await UserModel.findOne({ email });

    return this.mapUserWithFallback(user);
  }

  async createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar: Nullable<URL>,
  ): Promise<UserEntity> {
    const newUser = new UserEntity(
      email,
      password,
      firstName,
      lastName,
      avatar,
    );

    const createdUser = await UserModel.create(newUser);

    createdUser.save();

    return mapUserDocumentToUserEntity(createdUser);
  }
}

const userController = new UserController();

export default userController;
