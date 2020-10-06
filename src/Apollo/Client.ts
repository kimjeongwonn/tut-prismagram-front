import { ApolloClient } from '@apollo/client';
import cache from './Cache';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache,
  headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
});

export default client;
