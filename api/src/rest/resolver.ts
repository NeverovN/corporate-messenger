import { UserController } from '../controllers/User';
import getUserIdByToken from '../utils/getUserIdByToken';

export const userResolver = {
  getUserTheme: async (req: any, res: any): Promise<void> => {
    const id = getUserIdByToken(req.headers.authorization);
    if (!id) {
      throw new Error('Unauthorized');
    }
    const user = await UserController.getUser(id);
    const theme = !user ? null : user.theme;

    res.status(200).json(theme);
  },

  setTheme: async (req: any, res: any): Promise<void> => {
    const id = getUserIdByToken(req.headers.authorization);
    if (!id) {
      throw new Error('Unauthorized');
    }
    const themeName =
      req.body.name === 'light' ||
      req.body.name === 'dark' ||
      req.body.name === 'native'
        ? req.body.name
        : 'native';
    try {
      const theme = await UserController.setTheme(id, themeName);
      res.status(200).json({ theme });
    } catch (error) {
      res.status(404).json({ message: 'theme not updated' });
    }
  },
};
