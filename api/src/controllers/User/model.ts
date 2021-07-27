import { ID, Nullable, URL } from '../../types/common';

import UserModel, { UserEntity } from '../../models/User';
import { UserDocument } from '../../models/User/types';

import { mapUserDocumentToUserEntity } from '../../models/User/mappers';
import UserEntityController from './entity';
import verifyPasswordHash from '../../utils/verifyPasswordHash';
import { getNewPassword } from '../../utils/getNewPassword';

class UserModelController {
  private mapUserWithFallback(user: UserDocument | null): UserEntity | null {
    if (!user) return null;

    return mapUserDocumentToUserEntity(user);
  }

  async getUser(id: ID) {
    const user = await UserModel.findById(id);

    return this.mapUserWithFallback(user);
  }

  async getAllUsers() {
    return (await UserModel.find().exec()).map(this.mapUserWithFallback);
  }

  async getUsers(ids: ID[]): Promise<Array<UserEntity>> {
    const usersQuery = await UserModel.find().exec();

    const result = usersQuery.filter(({ id }) => ids.includes(id));

    return result.map(mapUserDocumentToUserEntity);
  }

  async getUserByEmail(email: ID): Promise<UserEntity | null> {
    const user = await UserModel.findOne({ email });

    return this.mapUserWithFallback(user);
  }

  async addFriend(userId: ID, friendId: ID): Promise<UserEntity | null> {
    const user = await UserModel.findById(userId);

    if (!user) throw new Error("Target user wasn't found");

    const friend = await UserModel.findById(friendId);

    if (!friend) throw new Error("Friend user wasn't found");

    const [newUser, newFriend] = UserEntityController.makeUsersFriends(
      mapUserDocumentToUserEntity(user),
      mapUserDocumentToUserEntity(friend),
    );

    const userResult = await UserModel.findByIdAndUpdate(userId, newUser);
    await UserModel.findByIdAndUpdate(friendId, newFriend);

    return this.mapUserWithFallback(userResult);
  }

  async removeFriend(userId: ID, friendId: ID): Promise<UserEntity> {
    const user = await UserModel.findById(userId);
    const friend = await UserModel.findById(friendId);

    if (!user) {
      throw Error('unauthorized user');
    }

    if (!friend) {
      throw Error('friend not found');
    }

    const updatedUser = UserEntityController.removeFriend(
      mapUserDocumentToUserEntity(user),
      friendId,
    );
    const updatedFriend = UserEntityController.removeFriend(
      mapUserDocumentToUserEntity(friend),
      userId,
    );

    const newUser = await UserModel.findByIdAndUpdate(userId, updatedUser);
    await UserModel.findByIdAndUpdate(friendId, updatedFriend);

    if (!newUser) {
      throw Error('network error, update unsuccessful');
    }

    return newUser;
  }

  async getFriends(userId: ID): Promise<UserEntity[]> {
    const user = await UserModel.findById(userId).exec();
    if (!user) {
      throw Error('unlogged user');
    }

    const friends = await this.getUsers(user.friends);

    return friends;
  }

  async createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar: Nullable<URL>,
  ): Promise<UserEntity> {
    const newUser = UserEntityController.createUserEntity(
      email,
      password,
      firstName,
      lastName,
      avatar,
    );

    const createdUser = await UserModel.create(newUser);

    return mapUserDocumentToUserEntity(createdUser);
  }

  async editEmail(userId: ID, newEmail: string): Promise<UserEntity> {
    const user = await UserModel.findById(userId).exec();

    if (!user) {
      throw Error('unauthorized');
    }

    const updUser = UserEntityController.editEmail(
      mapUserDocumentToUserEntity(user),
      newEmail,
    );

    await UserModel.findByIdAndUpdate(userId, updUser).exec();
    const newUser = await UserModel.findById(userId).exec();

    if (!newUser) {
      throw Error('network error, update failed');
    }

    return mapUserDocumentToUserEntity(newUser);
  }

  async editPassword(userId: string, oldPassword: string, newPassword: string) {
    const user = await UserModel.findById(userId).exec();

    if (!user) {
      throw Error('unauthorized');
    }

    const isOldPasswordCorrect = await verifyPasswordHash(
      user.password,
      oldPassword,
    );

    if (!isOldPasswordCorrect) {
      throw Error('You provided wrong old password');
    }

    const hashedPassword = await getNewPassword(
      oldPassword,
      user.password,
      newPassword,
    );

    const updUser = UserEntityController.editPassword(
      mapUserDocumentToUserEntity(user),
      hashedPassword,
    );

    await UserModel.findByIdAndUpdate(userId, updUser);
    const newUser = await UserModel.findById(userId).exec();

    if (!newUser) {
      throw Error('network error, update failed');
    }

    return mapUserDocumentToUserEntity(newUser);
  }

  async editUsername(
    userId: string,
    firstName: string,
    lastName: string,
  ): Promise<UserEntity> {
    const user = await UserModel.findById(userId).exec();

    if (!user) {
      throw Error('unauthorized');
    }

    const updUser = UserEntityController.editUsername(
      mapUserDocumentToUserEntity(user),
      firstName,
      lastName,
    );

    await UserModel.findByIdAndUpdate(userId, updUser).exec();
    const newUser = await UserModel.findById(userId).exec();

    if (!newUser) {
      throw Error('network error, update failed');
    }

    return mapUserDocumentToUserEntity(newUser);
  }

  async toggleTheme(userId: ID): Promise<boolean> {
    const user = await UserModel.findById(userId).exec();
    if (!user) {
      throw new Error('User not found');
    }

    const newUser = UserEntityController.toggleTheme(
      mapUserDocumentToUserEntity(user),
    );
    const updatedUser = await UserModel.findByIdAndUpdate(userId, newUser);
    if (!updatedUser) {
      throw new Error('Network error');
    }

    return newUser.isLightTheme;
  }
}

const userModelController = new UserModelController();

export default userModelController;
