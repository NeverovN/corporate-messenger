import {
  useEditEmailMutation,
  useGetUserQuery,
} from '@/common/types/gql.generated';

export const useUpdateEmail = (newEmail: string) => {
  const [editEmail] = useEditEmailMutation();
  const { data } = useGetUserQuery();

  return () => {
    try {
      if (data && data.getUser) {
        if (data.getUser.email === newEmail) {
          console.log('email is the same');
          return;
        }
      }
      editEmail({ variables: { newEmail: newEmail } });
    } catch (err) {
      console.log(err);
    }
  };
};
