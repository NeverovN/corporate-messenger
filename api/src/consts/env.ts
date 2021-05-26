const DB_URL: string = process.env.DB_URL || '';
const PORT: number = Number.parseInt(process.env.PORT || '') || 3000;
const TOKEN_SECRET: string = process.env.TOKEN_SECRET || 'default-secret';

export const EnvConstants = {
  DB_URL,
  PORT,
  TOKEN_SECRET,
};
