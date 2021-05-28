import jwt from 'jsonwebtoken';
import { EnvConstants } from '../consts/env';

type TokenType = {
  userId: string;
  iat: number;
  exp: number;
};

export default function (token: string): TokenType {
  return jwt.verify(token, EnvConstants.TOKEN_SECRET) as TokenType;
}
