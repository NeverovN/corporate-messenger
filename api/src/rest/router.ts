import express from 'express';
import { userResolver } from './resolver';

const user = express.Router();
user.use(express.json());

user.get('/:token/theme', userResolver.getUserTheme);
user.patch('/:token/theme', userResolver.toggleTheme);

export { user as userRouter };
