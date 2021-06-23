import { User } from '@/common/types/gql.generated';

interface IUser extends User {}

export const getName = (
  firstName: string | undefined,
  lastName: string | undefined,
) => {
  if (firstName && lastName) {
    return firstName + ' ' + lastName;
  }

  return '';
};
