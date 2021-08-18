import { UserController } from '../controllers/User';
import getUserIdByToken from '../utils/getUserIdByToken';

export const userResolver = {
  getUserTheme: async (req: any, res: any): Promise<void> => {
    const id = getUserIdByToken(req.headers.authorization);
    if (!id) {
      throw new Error('Unauthorized');
    }
    const user = await UserController.getUser(id);
    const theme = !user ? null : user.isLightTheme ? 'light' : 'dark';

    res.status(200).json(theme);
  },

  setTheme: async (req: any, res: any): Promise<void> => {
    const id = getUserIdByToken(req.headers.authorization);
    console.log(req.body);

    if (!id) {
      throw new Error('Unauthorized');
    }
    try {
      const theme = await UserController.toggleTheme(id);
      res.status(200).json({ theme: theme ? 'light' : 'dark' });
    } catch (error) {
      res.status(404).json({ message: 'theme not updated' });
    }
  },
};
