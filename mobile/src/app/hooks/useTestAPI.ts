import { useLoginMutation } from '@/common/types/gql.generated';

export default function useTestAPI(): string | null {
  const [, { data }] = useLoginMutation({
    variables: {
      input: {
        email: 'test@test.test',
        password: 'password1',
      },
    },
  });

  return data?.login?.token || null;
}
