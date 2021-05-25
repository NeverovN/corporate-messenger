import { Resolvers } from '../types/gql.generated';
import { User } from '../types/typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// token
import { ACCESS_SECRET_TOKEN } from '../consts/tokens';

const resolverMap: Resolvers = {
  Query: {
    async getUser(_, args) {
      const verifiedUser = jwt.verify(
        args.token,
        ACCESS_SECRET_TOKEN,
      ) as User | null;

      console.log(verifiedUser);

      return verifiedUser;
    },
    async getUsers() {
      const users = await User.find();
      console.log(users);
      return users;
    },
    async getUserToken(_, args) {
      const user = await User.findOne({
        username: args.username,
      });

      if (typeof user === 'undefined') return null;

      try {
        if (await bcrypt.compare(args.password, user.password)) {
          const encryptedUser = {
            username: user.username,
            password: user.password,
            guid: user.guid,
          };

          const accessToken = jwt.sign(encryptedUser, ACCESS_SECRET_TOKEN);
          return { accessToken: accessToken };
        } else {
          return null;
        }
      } catch (err) {
        console.log(err);
        return null;
      }
    },
  },
  Mutation: {
    async createUser(_, args) {
      const newUser = new User();
      try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(args.input.password, salt);

        newUser.password = hashedPassword;
        newUser.username = args.input.username;

        newUser.save();
        console.log(await User.find());

        return newUser;
      } catch (error) {
        console.log('error', error);
        return newUser;
      }
    },
  },
};
export default resolverMap;
