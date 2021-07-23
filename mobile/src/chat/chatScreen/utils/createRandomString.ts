export const createRandomString = () => {
  const a =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  return a;
};
