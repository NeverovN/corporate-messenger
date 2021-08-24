import jwt from 'jsonwebtoken';

import { TokenType } from '../types/auth';
import { ID } from '../types/common';

import { EnvConstants } from '../consts/env';

export default function getUserIdByToken(token: string): ID | null {
  try {
    const decodedToken = jwt.verify(
      token,
      EnvConstants.TOKEN_SECRET,
    ) as TokenType;

    if (!decodedToken?.userId) return null;

    return decodedToken.userId;
  } catch {
    return null;
  }
}
