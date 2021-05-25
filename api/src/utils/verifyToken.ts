import jwt from 'jsonwebtoken';

import { TOKEN_SECRET } from '../consts/tokens';
import { TokenType } from '../types/auth';
import { ID } from '../types/common';

export default function verifyToken(token: string, userId: ID): boolean {
  try {
    const decodedToken = jwt.verify(token, TOKEN_SECRET) as TokenType;

    if (!decodedToken?.userId) return false;

    return decodedToken.userId === userId;
  } catch {
    return false;
  }
}
