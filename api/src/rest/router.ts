import express from 'express';
import { userResolver } from './resolver';

const user = express.Router();
user.use(express.json());

user.get('/theme', userResolver.getUserTheme);
user.patch('/theme', userResolver.setTheme);

export { user as userRouter };
