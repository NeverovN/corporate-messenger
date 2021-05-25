import jwt from 'jsonwebtoken';

import { TOKEN_SECRET } from '../consts/tokens';
import { TokenType } from '../types/auth';
import { ID } from '../types/common';

export default function getUserIdByToken(token: string): ID | null {
  try {
    const decodedToken = jwt.verify(token, TOKEN_SECRET) as TokenType;

    if (!decodedToken?.userId) return null;

    return decodedToken.userId;
  } catch {
    return null;
  }
}
