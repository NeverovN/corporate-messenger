import { useEditUserNameMutation } from '@/common/types/gql.generated';

export const useUpdateUsername = (
  newFirstName: string,
  newLastName: string,
  resetFName: (val: string) => void,
  resetLName: (val: string) => void,
) => {
  const [editUsername] = useEditUserNameMutation();

  return () => {
    editUsername({
      variables: {
        newFirstName,
        newLastName,
      },
    });
    resetFName('');
    resetLName('');
  };
};
