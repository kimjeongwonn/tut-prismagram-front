import { gql } from '@apollo/client';

export const SEE_USER = gql`
  query SeeUser($username: String!) {
    seeUser(username: $username) {
      profileImage
      id
      isSelf
      isFollowing
      username
      fullName
      bio
      followersCount
      followingsCount
      postsCount
      posts {
        id
        user {
          id
          username
        }
        files {
          id
          url
        }
        likesCount
        commentsCount
      }
    }
  }
`;

export const FOLLOW_TOGGLE = gql`
  mutation FollowToggle($followId: String!) {
    followToggle(followId: $followId)
  }
`;
