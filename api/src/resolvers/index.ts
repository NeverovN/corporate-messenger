import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
  Query: {
    getUserByGuid(_: void, _args: { guid: string }): string {
      return `👋 Hello world! 👋`;
    },
  },
};
export default resolverMap;
