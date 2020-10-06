import { makeVar, InMemoryCache, gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const tokenVar = makeVar('');

const cache = new InMemoryCache();

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
  },
});

export default cache;
