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
        id
        url
      }
      location
      caption
      isLike
      likesCount
      commentsCount
      comments(last: 2) {
        id
        user {
          id
          profileImage
          username
        }
        text
      }
      postAt
    }
  }
`;
