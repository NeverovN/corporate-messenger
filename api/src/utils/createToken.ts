import jwt from 'jsonwebtoken';

import { ID } from '../types/common';

import { EnvConstants } from '../consts/env';

export default function createToken(userId: ID): string {
  return jwt.sign({ userId }, EnvConstants.TOKEN_SECRET, {
    expiresIn: '30d',
  });
}
