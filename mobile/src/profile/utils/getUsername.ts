export const getUsername = (
  first: string | undefined,
  last: string | undefined,
): string => {
  return first + ' ' + last;
};
