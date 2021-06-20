import { useEditUserNameMutation } from '@/common/types/gql.generated';

export const useUpdateUsername = (
  newFirstName: string,
  newLastName: string,
) => {
  const [editUsername] = useEditUserNameMutation();

  return async () => {
    await editUsername({
      variables: {
        newFirstName,
        newLastName,
      },
    });
  };
};
