import { InMemoryCache, gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const cache = new InMemoryCache({
  typePolicies: {
    Post: {
      fields: {
        comments: {
          merge(existing = [], incoming: NexusGenFieldTypes['Comment'][]) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
  },
});

export default cache;
