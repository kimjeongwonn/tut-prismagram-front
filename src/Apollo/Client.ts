import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { tokenVar } from './CacheState';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const cache = new InMemoryCache();

export default new ApolloClient({
  uri: 'http://localhost:4000',
  cache,
});

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
  },
});
