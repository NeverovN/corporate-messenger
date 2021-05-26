import jwt from 'jsonwebtoken';

import { TokenType } from '../types/auth';
import { ID } from '../types/common';

import { EnvConstants } from '../consts/env';

export default function verifyToken(token: string, userId: ID): boolean {
  try {
    const decodedToken = jwt.verify(
      token,
      EnvConstants.TOKEN_SECRET,
    ) as TokenType;

    if (!decodedToken?.userId) return false;

    return decodedToken.userId === userId;
  } catch {
    return false;
  }
}
