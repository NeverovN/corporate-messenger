import { ID, Nullable, URL } from '../../types/common';

import UserModel, { UserEntity } from '../../models/User';
import { UserDocument } from '../../models/User/types';

import { mapUserDocumentToUserEntity } from '../../models/User/mappers';
import UserEntityController from './entity';

class UserModelController {
  private mapUserWithFallback(user: UserDocument | null): UserEntity | null {
    if (!user) return null;

    return mapUserDocumentToUserEntity(user);
  }

  async getUser(id: ID) {
    const user = await UserModel.findById(id);

    return this.mapUserWithFallback(user);
  }

  async getUsers(ids: ID[]): Promise<Array<UserEntity>> {
    const usersQuery = await UserModel.find().exec();

    const result = usersQuery.filter(({ id }) => ids.includes(id));

    return result.map(mapUserDocumentToUserEntity);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const usersQuery = await UserModel.find().exec();
    return usersQuery.map(mapUserDocumentToUserEntity);
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
}

const userModelController = new UserModelController();

export default userModelController;
