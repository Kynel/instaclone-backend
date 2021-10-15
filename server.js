require('dotenv').config();
import { ApolloServer, forEachField } from 'apollo-server';
import { PossibleFragmentSpreadsRule } from 'graphql';
import schema from './schema';

const server = new ApolloServer({ schema });

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`🚀 Server is running on http://localhost:${PORT}/`));
