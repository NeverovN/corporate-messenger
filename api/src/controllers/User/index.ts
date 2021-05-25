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
  async getUser(id: string) {
    const user = await UserModel.findById(id);

    const result = user || null;

    return result;
  }

  // async getUsers(ids: Array<string>) {
  //   const users = await this.repository.findByIds(ids);

  //   return users;
  // }

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
