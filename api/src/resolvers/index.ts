import { Resolvers } from '../types/gql.generated';
import { User } from '../types/typeormUser';
import { Post } from '../types/typeormPost';
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

      return verifiedUser;
    },
    async getUsers() {
      const users = await User.find();
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
    getPosts() {
      return Post.find() || null;
    },
    async getPost(_, args) {
      const post = await Post.findOne({
        id: args.id,
      });

      return post || null;
    },
    async getUsersPosts(_, args) {
      const posts = await Post.find({ username: args.username });

      return posts || null;
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

        return await newUser.save();
      } catch (error) {
        console.log('error', error);
        return newUser;
      }
    },
    async addPost(_, args) {
      // there must be token check but there is no token queries on this branch
      const newPost = new Post();
      // const user = jwt.verify(args.input.token, ACCESS_SECRET_TOKEN) as User;
      newPost.username = args.input.username;
      return await newPost.save();
    },
  },
};
export default resolverMap;
