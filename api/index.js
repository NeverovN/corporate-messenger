import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String,
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Harry Potter",
    author: "Joanne Rowling"
  },
  {
    title: "Hobbit",
    author: "John Tolkin"
  },
  {
    title: "Alice in wonderland",
    author: "Lewis Caroll"
  },
  {
    title: "Master and Margarita",
    author: "Mikhail Bulgakov"
  }
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
  .then(({ url }) => {
    console.log(`server is running at url ${url}`)
  });