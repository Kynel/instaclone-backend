require('dotenv').config();
import { ApolloServer, forEachField } from 'apollo-server';
import { PossibleFragmentSpreadsRule } from 'graphql';
import schema from './schema';
import { getUser, protectResolver } from './users/users.utils';

const PORT = process.env.PORT;
const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
      protectResolver,
    };
  },
});

server
  .listen(PORT)
  .then(() => console.log(`🚀 Server is running on http://localhost:${PORT}/`));
