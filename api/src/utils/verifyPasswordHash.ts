import bcrypt from 'bcrypt';

export default async function verifyPasswordHash(
  hashedPassword: string,
  rawPassword: string,
): Promise<boolean> {
  try {
    return await bcrypt.compare(rawPassword, hashedPassword);
  } catch {
    return false;
  }
}
