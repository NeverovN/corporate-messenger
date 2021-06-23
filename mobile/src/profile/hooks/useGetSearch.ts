import { useGetFilteredUsers } from 'profile/hooks/useGetFilteredUsers';

export const useGetSearch = (filter: string) => {
  const users = useGetFilteredUsers(filter);

  return () => users;
};
