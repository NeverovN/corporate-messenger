// types
import { IUserItem } from 'profile/types/user';

export const filterUsers = (
  users: Array<IUserItem | undefined>,
  filter: string,
) => {
  filter = filter.toLowerCase().replace(/\s/g, '');

  const filteredUsers = users.filter((user) => {
    if (!user) {
      return false;
    }
    const fName = user.firstName.toLowerCase();
    const lName = user.lastName.toLowerCase();
    const fullName = fName + lName;

    if (fName.startsWith(filter)) {
      return true;
    }

    if (lName.startsWith(filter)) {
      return true;
    }

    if (fullName.startsWith(filter)) {
      return true;
    }

    return false;
  });

  const isData = !filteredUsers.includes(undefined) && filteredUsers.length;

  return isData ? (filteredUsers as IUserItem[]) : null;
};
