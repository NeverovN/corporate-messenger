import { ID, Nullable, URL } from '../../types/common';

import { UserEntity } from '../../models/User';

class UserEntityController {
  makeUsersFriends(
    userA: UserEntity,
    userB: UserEntity,
  ): [UserEntity, UserEntity] {
    const newUserA = this.addUserToFriends(userA, userB);
    const newUserB = this.addUserToFriends(userB, userA);

    return [newUserA, newUserB];
  }

  createUserEntity(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar: Nullable<URL>,
  ): UserEntity {
    const newUser = new UserEntity(
      email,
      password,
      firstName,
      lastName,
      avatar,
    );

    return newUser;
  }

  private addUserToFriends(user: UserEntity, friend: UserEntity): UserEntity {
    const newUserFriendIds = this.getNewFriendIds(user.friends, friend._id);

    return { ...user, friends: newUserFriendIds };
  }

  private getNewFriendIds(
    existingFriendIds: Array<ID>,
    newFriendId: ID,
  ): Array<ID> {
    const doesUserAlreadyKnowFriend = existingFriendIds.includes(newFriendId);

    if (doesUserAlreadyKnowFriend) return existingFriendIds;

    return [...existingFriendIds, newFriendId];
  }
}

const userEntityController = new UserEntityController();

export default userEntityController;
