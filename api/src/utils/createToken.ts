import jwt from 'jsonwebtoken';

import { TOKEN_SECRET } from '../consts/tokens';
import { ID } from '../types/common';

export default function createToken(userId: ID): string {
  return jwt.sign({ userId }, TOKEN_SECRET, { expiresIn: '1m' });
}
