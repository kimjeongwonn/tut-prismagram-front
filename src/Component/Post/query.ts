import { gql } from '@apollo/client';

export const SEE_FEED = gql`
  query SeeFeed {
    seeFeed {
      id
      user {
        profileImage
        username
      }
      files {
        url
      }
      location
      caption
    }
  }
`;
