// types
import { IUserItem } from 'profile/types/user';

export const filterUsers = (users: IUserItem[], filter: string) => {
  filter = filter.toLowerCase().replace(/\s/g, '');

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().startsWith(filter) ||
      user.lastName.toLowerCase().startsWith(filter) ||
      (user.firstName.toLowerCase() + user.lastName.toLowerCase()).startsWith(
        filter,
      ) ||
      (user.lastName.toLowerCase() + user.firstName.toLowerCase()).startsWith(
        filter,
      ),
  );

  return filteredUsers;
};
