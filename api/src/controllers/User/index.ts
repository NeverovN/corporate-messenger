import { Nullable, URL } from '../../types/common';

import UserModel, { UserEntity } from '../../models/User';
import { UserDocument } from '../../models/User/types';

import { mapUserDocumentToUserEntity } from '../../models/User/mappers';

class UserController {
  private mapUserWithFallback(user: UserDocument | null): UserEntity | null {
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

    return mapUserDocumentToUserEntity(createdUser);
  }
}

const userController = new UserController();

export default userController;
