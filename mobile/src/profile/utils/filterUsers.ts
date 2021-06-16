// types
import { IUserItem } from 'profile/types/user';

export const filterUsers = (
  users: Array<IUserItem | undefined>,
  filter: string,
) => {
  filter = filter.toLowerCase().replace(/\s/g, '');

  const filteredUsers: IUserItem[] = users.filter(
    (user) =>
      user &&
      (user.firstName.toLowerCase().startsWith(filter) ||
        user.lastName.toLowerCase().startsWith(filter) ||
        (user.firstName.toLowerCase() + user.lastName.toLowerCase()).startsWith(
          filter,
        ) ||
        (user.lastName.toLowerCase() + user.firstName.toLowerCase()).startsWith(
          filter,
        )),
  ) as IUserItem[];

  return filteredUsers;
};
