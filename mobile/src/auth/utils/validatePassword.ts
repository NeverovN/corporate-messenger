export default function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;

  return passwordRegex.test(password);
}
