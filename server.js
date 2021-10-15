require('dotenv').config();
import { ApolloServer, forEachField } from 'apollo-server';
import { PossibleFragmentSpreadsRule } from 'graphql';
import schema from './schema';

const PORT = process.env.PORT;
const server = new ApolloServer({ schema });

server
  .listen(PORT)
  .then(() => console.log(`🚀 Server is running on http://localhost:${PORT}/`));
