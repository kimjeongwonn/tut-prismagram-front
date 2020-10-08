import { gql } from '@apollo/client';

export const SEE_FEED = gql`
  query SeeFeed {
    seeFeed {
      id
      user {
        id
        profileImage
        username
      }
      files {
        url
      }
      location
      caption
      isLike
      likesCount
      comments {
        user {
          id
          profileImage
          username
        }
        text
      }
    }
  }
`;
