import { User, Resolvers } from '../types/gql.generated';

const resolverMap: Resolvers = {
  Query: {
    getUserByGuid(_, args): User {
      return { guid: args.guid, firstName: 'FirstName', lastName: 'LastName' };
    },
  },
};
export default resolverMap;
