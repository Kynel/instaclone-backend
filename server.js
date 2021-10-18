require('dotenv').config();
import { ApolloServer, forEachField } from 'apollo-server';
import { PossibleFragmentSpreadsRule } from 'graphql';
import schema from './schema';

const PORT = process.env.PORT;
const server = new ApolloServer({
  schema,
  context: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM0NTI1NDMyfQ._RPdIhR1xy2apSExmOF_1ag8s96ucsZ-HEQnZ0m6fYs',
  },
});

server
  .listen(PORT)
  .then(() => console.log(`🚀 Server is running on http://localhost:${PORT}/`));
