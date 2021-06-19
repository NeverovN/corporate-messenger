interface IUserWithoutFriends {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IUser extends IUserWithoutFriends {
  friends: Array<any>;
}
