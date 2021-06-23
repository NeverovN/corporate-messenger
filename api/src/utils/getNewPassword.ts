import createPasswordHash from './createPasswordHash';
import verifyPasswordHash from './verifyPasswordHash';

export const getNewPassword = async (
  oldPassword: string,
  currentIncriptedPassword: string,
  newPassword: string,
): Promise<string> => {
  const isOldPasswordCorrect = await verifyPasswordHash(
    currentIncriptedPassword,
    oldPassword,
  );

  if (!isOldPasswordCorrect) {
    throw Error('You provided wrong old password');
  }

  return await createPasswordHash(newPassword);
};
