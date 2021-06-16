import { useGetFilteredUsers } from 'profile/hooks/useGetFilteredUsers';

export const useGetSearch = (searchString: string) => {
  const users = useGetFilteredUsers(searchString);

  return () => users;
};
