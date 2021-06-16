import {
  useEditUserNameMutation,
  useGetUserQuery,
} from '@/common/types/gql.generated';

export const useUpdateUsername = (
  newFirstName: string,
  newLastName: string,
) => {
  const [editUsername] = useEditUserNameMutation();
  const { data } = useGetUserQuery();

  return () => {
    try {
      if (data && data.getUser) {
        if (
          data.getUser.firstName === newFirstName &&
          data.getUser.lastName === newLastName
        ) {
          console.log('username is the same');
          return;
        }
      }
      editUsername({
        variables: {
          newFirstName,
          newLastName,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
