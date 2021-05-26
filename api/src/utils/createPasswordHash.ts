import bcrypt from 'bcrypt';

export default async function createPasswordHash(
  password: string,
): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}
